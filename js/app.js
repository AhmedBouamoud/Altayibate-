const STORE_KEY = 'rihla_jihawi_v5_progress';
const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));
const pageName = document.body.dataset.page || 'index';

function loadProgress(){
  const base = {xp:0, attempts:0, correct:0, wrongIds:[], bySubject:{}, byLesson:{}, sessions:0, bestSpeed:0, streak:0, name:''};
  try{return {...base, ...(JSON.parse(localStorage.getItem(STORE_KEY)||'{}'))};} catch(e){return base}
}
function saveProgress(p){localStorage.setItem(STORE_KEY, JSON.stringify(p)); updateHeader();}
function resetProgress(){localStorage.removeItem(STORE_KEY); toast('تم تصفير التقدم.'); setTimeout(()=>location.reload(), 400)}
function addAttempt(q, isCorrect){
  const p = loadProgress();
  p.attempts++; if(isCorrect){p.correct++; p.xp += 10; p.streak=(p.streak||0)+1;} else {p.streak=0; if(!p.wrongIds.includes(q.id)) p.wrongIds.push(q.id)}
  p.bySubject[q.subject] = p.bySubject[q.subject] || {a:0,c:0}; p.bySubject[q.subject].a++; if(isCorrect)p.bySubject[q.subject].c++;
  p.byLesson[q.lesson] = p.byLesson[q.lesson] || {a:0,c:0,subject:q.subject}; p.byLesson[q.lesson].a++; if(isCorrect)p.byLesson[q.lesson].c++;
  if(isCorrect && p.wrongIds.includes(q.id)) p.wrongIds = p.wrongIds.filter(id=>id!==q.id);
  saveProgress(p); return p;
}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function sample(arr,n){return shuffle(arr).slice(0,n)}
function subjects(){return [...new Set(QUESTIONS.map(q=>q.subject))]}
function lessons(subject=''){return [...new Set(QUESTIONS.filter(q=>!subject||q.subject===subject).map(q=>q.lesson))]}
function accuracy(){const p=loadProgress(); return p.attempts?Math.round((p.correct/p.attempts)*100):0}
function masteryForLesson(lesson){const p=loadProgress(); const x=p.byLesson?.[lesson]; return x&&x.a?Math.round((x.c/x.a)*100):0}
function toast(msg){let t=$('.toast'); if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)} t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function beep(type='ok'){
  try{const ctx=new (window.AudioContext||window.webkitAudioContext)(); const o=ctx.createOscillator(); const g=ctx.createGain();
  const f = type==='bad'?170:type==='win'?740:520; o.frequency.value=f; o.type=type==='bad'?'sawtooth':'sine'; g.gain.value=.045; o.connect(g); g.connect(ctx.destination); o.start(); setTimeout(()=>{o.stop();ctx.close()}, type==='win'?220:120);}catch(e){}
}
function speak(text){try{speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='ar-MA'; u.rate=.92; speechSynthesis.speak(u)}catch(e){}}
function confetti(){const c=document.createElement('div');c.className='confetti'; for(let i=0;i<40;i++){const s=document.createElement('span');s.style.left=Math.random()*100+'%';s.style.animationDelay=Math.random()*0.35+'s';s.style.transform=`rotate(${Math.random()*180}deg)`;c.appendChild(s)} document.body.appendChild(c);setTimeout(()=>c.remove(),2300)}
function updateHeader(){
  const p=loadProgress(); $$('.js-xp').forEach(e=>e.textContent=p.xp||0); $$('.js-acc').forEach(e=>e.textContent=accuracy()+'%'); $$('.js-attempts').forEach(e=>e.textContent=p.attempts||0); $$('.js-correct').forEach(e=>e.textContent=p.correct||0);
  const bar=$('.js-master-bar'); if(bar) bar.style.width=Math.min(100, accuracy())+'%';
}
function setActiveNav(){ $$('.bottom-nav a').forEach(a=>{if(a.dataset.page===pageName)a.classList.add('active')}) }
function htmlEscape(s){return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function linkPage(page, params={}){const qs=new URLSearchParams(params).toString(); return page+(qs?'?'+qs:'')}
function getParams(){return Object.fromEntries(new URLSearchParams(location.search).entries())}

function renderShell(){ updateHeader(); setActiveNav(); }

document.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('bg-orbs'); $('.page-enter')?.classList.add('page-enter'); renderShell(); initPage();});

function initPage(){
  if(pageName==='index') initHome();
  if(pageName==='lessons') initLessons();
  if(pageName==='quiz') initQuiz();
  if(pageName==='speed') initSpeed();
  if(pageName==='clinic') initClinic();
  if(pageName==='flashcards') initFlashcards();
  if(pageName==='achievements') initAchievements();
  if(pageName==='report') initReport();
}

function initHome(){
  const p=loadProgress();
  $('#homeStats').innerHTML = `
    <div class="stat"><b class="js-xp">${p.xp||0}</b><span>نقاط XP</span></div>
    <div class="stat"><b>${accuracy()}%</b><span>نسبة الإتقان</span></div>
    <div class="stat"><b>${p.attempts||0}</b><span>محاولة</span></div>
    <div class="stat"><b>${p.wrongIds?.length||0}</b><span>خطأ ينتظر العلاج</span></div>`;
  const resume = $('#resumeBox');
  const weak = Object.entries(p.byLesson||{}).filter(([l,v])=>v.a>=2).sort((a,b)=>(a[1].c/a[1].a)-(b[1].c/b[1].a))[0];
  resume.innerHTML = weak ? `<h3>اقتراح ذكي لك</h3><p class="muted">أضعف درس عندك حالياً: <b>${htmlEscape(weak[0])}</b>. ابدأ تدريباً قصيراً عليه.</p><a class="btn primary" href="quiz.html?lesson=${encodeURIComponent(weak[0])}">تدرب على الدرس الآن</a>` : `<h3>ابدأ رحلتك</h3><p class="muted">ابدأ بمهمة 10 أسئلة لتحديد مستواك، ثم انتقل إلى عيادة الأخطاء والبطاقات.</p><a class="btn primary" href="quiz.html">ابدأ مهمة 10 أسئلة</a>`;
}

function initLessons(){
  const subjSel=$('#subjectFilter'); subjSel.innerHTML='<option value="">كل المواد</option>'+subjects().map(s=>`<option>${s}</option>`).join('');
  subjSel.addEventListener('change',()=>renderLessons(subjSel.value)); renderLessons('');
}
function renderLessons(subject){
  const box=$('#lessonsBox'); const list=lessons(subject);
  box.innerHTML = list.map(l=>{const count=QUESTIONS.filter(q=>q.lesson===l).length; const m=masteryForLesson(l); const subj=QUESTIONS.find(q=>q.lesson===l)?.subject||'';
  return `<article class="lesson-card"><div class="chip">${htmlEscape(subj)}</div><h3>${htmlEscape(l)}</h3><p class="muted">${count} سؤال جديد • إتقانك: ${m}%</p><div class="progress"><i style="width:${m}%"></i></div><div class="toolbar"><a class="btn primary" href="quiz.html?lesson=${encodeURIComponent(l)}">تدرب</a><a class="btn ghost" href="flashcards.html?subject=${encodeURIComponent(subj)}">بطاقات</a></div></article>`}).join('');
}

let quizState = {pool:[],i:0,score:0,current:null,answered:false,total:10};
function initQuiz(){
  const params=getParams();
  const subj=$('#quizSubject'), les=$('#quizLesson');
  subj.innerHTML='<option value="">كل المواد</option>'+subjects().map(s=>`<option>${s}</option>`).join('');
  function fillLessons(){const sv=subj.value; les.innerHTML='<option value="">كل الدروس</option>'+lessons(sv).map(l=>`<option>${l}</option>`).join(''); if(params.lesson){les.value=params.lesson; subj.value=QUESTIONS.find(q=>q.lesson===params.lesson)?.subject||'';}}
  subj.addEventListener('change',fillLessons); fillLessons(); if(params.subject)subj.value=params.subject; if(params.lesson){subj.value=QUESTIONS.find(q=>q.lesson===params.lesson)?.subject||''; fillLessons(); les.value=params.lesson;}
  $('#startQuiz').addEventListener('click',startQuiz); $('#nextQ').addEventListener('click',nextQuestion); $('#speakQ').addEventListener('click',()=>quizState.current&&speak(quizState.current.question)); $('#fifty').addEventListener('click',fiftyFifty);
  startQuiz();
}
function startQuiz(){
  const subj=$('#quizSubject').value, les=$('#quizLesson').value; const n=Number($('#quizCount').value||10);
  let pool=QUESTIONS.filter(q=>(!subj||q.subject===subj)&&(!les||q.lesson===les));
  if(!pool.length){
    $('#qBox').innerHTML='<div class="panel"><h2>لا توجد أسئلة لهذا الاختيار.</h2><p class="muted">اختر درساً آخر أو ابدأ اختباراً عاماً.</p></div>';
    $('#quizResult').innerHTML='';
    return;
  }
  quizState={pool:sample(pool,n),i:0,score:0,current:null,answered:false,total:Math.min(n,pool.length)};
  $('#quizResult').innerHTML=''; nextQuestion(true);
}
function renderQuestion(q){
  quizState.current=q; quizState.answered=false; const opts=shuffle(q.options.map((text,idx)=>({text,idx})));
  $('#qCounter').textContent=`${quizState.i+1} / ${quizState.total}`; $('#qScore').textContent=`النقطة: ${quizState.score}`; $('.js-q-progress').style.width=`${(quizState.i/quizState.total)*100}%`;
  $('#qBox').innerHTML = `<div class="q-meta"><span>${htmlEscape(q.subject)} • ${htmlEscape(q.lesson)}</span><span>المهارة: ${htmlEscape(q.skill)} • المستوى ${q.level}</span></div><div class="q-text">${htmlEscape(q.question)}</div><div class="options">${opts.map((o,i)=>`<button class="option" data-correct="${o.idx===q.correct}"><b>${['أ','ب','ج','د'][i]}.</b> ${htmlEscape(o.text)}</button>`).join('')}</div><div class="feedback" id="feedback"></div>`;
  $$('.option',$('#qBox')).forEach(btn=>btn.addEventListener('click',()=>answer(btn)));
}
function answer(btn){
  if(quizState.answered)return; quizState.answered=true; const ok=btn.dataset.correct==='true'; const q=quizState.current;
  $$('.option',$('#qBox')).forEach(b=>{b.disabled=true; if(b.dataset.correct==='true')b.classList.add('correct')}); if(!ok)btn.classList.add('wrong');
  if(ok){quizState.score++; beep('ok');} else beep('bad');
  addAttempt(q, ok); $('#feedback').classList.add('show'); $('#feedback').innerHTML = ok?`<b>أحسنت!</b><br>${htmlEscape(q.explain)}`:`<b>ليست هذه هي الإجابة.</b><br>${htmlEscape(q.explain)}<br><span class="muted">نصيحة: ${htmlEscape(q.tip||'اقرأ السؤال بهدوء وحدد المطلوب.')}</span>`;
}
function nextQuestion(first=false){
  if(!first && !quizState.answered){toast('أجب أولاً أو اختر جواباً لتتعلم من التصحيح.'); return;}
  if(!first) quizState.i++;
  if(quizState.i>=quizState.total){finishQuiz();return}
  renderQuestion(quizState.pool[quizState.i]);
}
function finishQuiz(){
  const pct=Math.round((quizState.score/quizState.total)*100); if(pct>=80){confetti(); beep('win')}
  $('#qBox').innerHTML=''; $('.js-q-progress').style.width='100%'; $('#quizResult').innerHTML=`<div class="panel"><h2>انتهت المهمة 🎉</h2><p>حصلت على <b>${quizState.score}</b> من <b>${quizState.total}</b> — النسبة: <b>${pct}%</b></p><div class="toolbar"><button class="btn primary" onclick="startQuiz()">إعادة مهمة جديدة</button><a class="btn green" href="clinic.html">عالج أخطائي</a><a class="btn gold" href="report.html">تقريري</a></div></div>`;
}
function fiftyFifty(){
  if(quizState.answered||!quizState.current)return; const wrong=$$('.option',$('#qBox')).filter(b=>b.dataset.correct!=='true'); shuffle(wrong).slice(0,2).forEach(b=>{b.style.opacity=.32;b.disabled=true}); toast('تم حذف جوابين خاطئين.');
}

function initSpeed(){
  let time=60, score=0, running=false, current=null, timer=null;
  const timeEl=$('#speedTime'), scoreEl=$('#speedScore'), box=$('#speedBox');
  $('#startSpeed').addEventListener('click',()=>{time=60;score=0;running=true;scoreEl.textContent=score;tick(); renderSpeedQ(); clearInterval(timer); timer=setInterval(tick,1000)});
  function tick(){timeEl.textContent=time; $('.js-speed-bar').style.width=(time/60*100)+'%'; if(time<=0){clearInterval(timer);running=false;finish();} time--;}
  function renderSpeedQ(){if(!running)return; current=sample(QUESTIONS,1)[0]; const opts=shuffle(current.options.map((text,idx)=>({text,idx}))); box.innerHTML=`<div class="q-text">${htmlEscape(current.question)}</div><div class="options">${opts.map(o=>`<button class="option" data-correct="${o.idx===current.correct}">${htmlEscape(o.text)}</button>`).join('')}</div>`; $$('.option',box).forEach(b=>b.onclick=()=>{const ok=b.dataset.correct==='true'; if(ok){score++;scoreEl.textContent=score;beep('ok');addAttempt(current,true)}else{beep('bad');addAttempt(current,false)} renderSpeedQ();});}
  function finish(){const p=loadProgress(); if(score>(p.bestSpeed||0)){p.bestSpeed=score;saveProgress(p);confetti()} box.innerHTML=`<div class="panel"><h2>انتهى التحدي</h2><p>نتيجتك: <b>${score}</b> جواب صحيح في 60 ثانية.</p><button class="btn primary" id="againSpeed">تحد جديد</button></div>`; $('#againSpeed').onclick=()=>$('#startSpeed').click();}
}

function initClinic(){
  const p=loadProgress(); const ids=p.wrongIds||[]; const list=QUESTIONS.filter(q=>ids.includes(q.id));
  $('#wrongCount').textContent=ids.length;
  $('#clearWrong').onclick=()=>{const p=loadProgress();p.wrongIds=[];saveProgress(p);location.reload()};
  if(!list.length){$('#clinicBox').innerHTML='<div class="panel"><h2>عيادة الأخطاء فارغة 🌟</h2><p class="muted">عندما تخطئ في الاختبارات سيظهر السؤال هنا لتراجعه حتى تتقنه.</p><a class="btn primary" href="quiz.html">ابدأ اختباراً</a></div>'; return;}
  let i=0; function show(){const q=list[i%list.length]; const opts=shuffle(q.options.map((text,idx)=>({text,idx}))); $('#clinicBox').innerHTML=`<div class="question-box"><div class="q-meta"><span>${htmlEscape(q.subject)} • ${htmlEscape(q.lesson)}</span><span>${i+1} / ${list.length}</span></div><div class="q-text">${htmlEscape(q.question)}</div><div class="options">${opts.map(o=>`<button class="option" data-correct="${o.idx===q.correct}">${htmlEscape(o.text)}</button>`).join('')}</div><div class="feedback" id="feedback"></div></div>`; $$('.option',$('#clinicBox')).forEach(b=>b.onclick=()=>{const ok=b.dataset.correct==='true'; $$('.option',$('#clinicBox')).forEach(x=>{x.disabled=true;if(x.dataset.correct==='true')x.classList.add('correct')}); if(!ok)b.classList.add('wrong'); addAttempt(q,ok); $('#feedback').classList.add('show'); $('#feedback').innerHTML=`${ok?'<b>تم علاج الخطأ!</b>':'<b>راجع الفكرة مرة أخرى.</b>'}<br>${htmlEscape(q.explain)}`;});}
  $('#nextClinic').onclick=()=>{i++;show()}; show();
}

function initFlashcards(){
  const params=getParams(); const subj=$('#flashSubject'); subj.innerHTML='<option value="">كل البطاقات</option>'+subjects().map(s=>`<option>${s}</option>`).join(''); if(params.subject)subj.value=params.subject;
  let list=[],i=0,flipped=false; function refresh(){list=FLASHCARDS.filter(c=>!subj.value||c.subject===subj.value); i=0; flipped=false; show()}
  function show(){const c=list[i]||FLASHCARDS[0]; $('#flashIndex').textContent=`${i+1} / ${list.length}`; $('#flashFace').textContent=flipped?c.back:c.front; $('#flashSub').textContent=c.subject; $('#flashHint').textContent=flipped?'اضغط للعودة إلى المفهوم':'اضغط لقلب البطاقة ورؤية الشرح'}
  $('#flashCard').onclick=()=>{flipped=!flipped;show();beep('ok')}; $('#nextFlash').onclick=()=>{i=(i+1)%list.length;flipped=false;show()}; $('#prevFlash').onclick=()=>{i=(i-1+list.length)%list.length;flipped=false;show()}; $('#shuffleFlash').onclick=()=>{list=shuffle(list);i=0;flipped=false;show()}; subj.onchange=refresh; refresh();
}

function initAchievements(){
  const p=loadProgress(); const badges=[
    ['🚀','بداية الرحلة',p.attempts>=1],['🔥','20 محاولة',p.attempts>=20],['🎯','إتقان 70%',accuracy()>=70&&p.attempts>=10],['🏆','إتقان 85%',accuracy()>=85&&p.attempts>=15],['⚡','سريع الجهوي',p.bestSpeed>=10],['🩺','طبيب الأخطاء',(p.wrongIds||[]).length===0&&p.attempts>=10],['📚','مثابر',p.xp>=300],['👑','بطل رحلة الجهوي',p.xp>=700&&accuracy()>=75]
  ];
  $('#badgeBox').innerHTML=badges.map(b=>`<div class="badge ${b[2]?'unlocked':''}"><div class="bicon">${b[0]}</div><b>${b[1]}</b><p class="muted">${b[2]?'مفتوحة':'لم تفتح بعد'}</p></div>`).join('');
  $('#certName').value=p.name||''; $('#certName').oninput=e=>{const p=loadProgress();p.name=e.target.value;saveProgress(p);renderCert()}; renderCert();
  function renderCert(){const p=loadProgress(); $('#certificate').innerHTML=`<h2>شهادة تقدير</h2><p>تُمنح إلى التلميذ(ة)</p><h1>${htmlEscape(p.name||'........................')}</h1><p>نظير المثابرة في تطبيق رحلة الجهوي لمادة الاجتماعيات.</p><p><b>XP:</b> ${p.xp||0} • <b>الإتقان:</b> ${accuracy()}%</p><p class="signature">إعداد: الأستاذ أحمد بوعمود — مؤسسة الحنان</p>`}
  $('#printCert').onclick=()=>print(); $('#resetProgress').onclick=()=>resetProgress();
}

function initReport(){
  const p=loadProgress(); const tbody=$('#reportBody');
  const rows=subjects().map(s=>{const v=p.bySubject?.[s]||{a:0,c:0}; const pct=v.a?Math.round(v.c/v.a*100):0; return `<tr><td>${htmlEscape(s)}</td><td>${v.a}</td><td>${v.c}</td><td>${pct}%</td></tr>`}).join(''); tbody.innerHTML=rows;
  const weak=Object.entries(p.byLesson||{}).filter(([l,v])=>v.a>=2).sort((a,b)=>(a[1].c/a[1].a)-(b[1].c/b[1].a)).slice(0,5);
  $('#weakLessons').innerHTML= weak.length? weak.map(([l,v])=>`<li>${htmlEscape(l)} — ${Math.round(v.c/v.a*100)}%</li>`).join('') : '<li>لا توجد معطيات كافية بعد. أنجز 10 أسئلة على الأقل.</li>';
  $('#copyReport').onclick=()=>{const text=`تقرير رحلة الجهوي\nالمحاولات: ${p.attempts||0}\nالصحيح: ${p.correct||0}\nنسبة الإتقان: ${accuracy()}%\nXP: ${p.xp||0}\nأخطاء للعلاج: ${(p.wrongIds||[]).length}`; navigator.clipboard?.writeText(text); toast('تم نسخ التقرير.');  };
}