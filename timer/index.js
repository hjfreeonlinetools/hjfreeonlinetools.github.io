(function(_0x23d453,_0x76f36f){const _0x3e74e6=a0_0x2860,_0x4f26d1=_0x23d453();while(!![]){try{const _0x2e67f5=parseInt(_0x3e74e6(0xad))/0x1*(parseInt(_0x3e74e6(0xa8))/0x2)+parseInt(_0x3e74e6(0xaa))/0x3+parseInt(_0x3e74e6(0xa2))/0x4*(-parseInt(_0x3e74e6(0xac))/0x5)+-parseInt(_0x3e74e6(0x9a))/0x6+parseInt(_0x3e74e6(0xab))/0x7*(parseInt(_0x3e74e6(0x94))/0x8)+-parseInt(_0x3e74e6(0x98))/0x9*(-parseInt(_0x3e74e6(0x9c))/0xa)+-parseInt(_0x3e74e6(0xa3))/0xb;if(_0x2e67f5===_0x76f36f)break;else _0x4f26d1['push'](_0x4f26d1['shift']());}catch(_0x3b5ed5){_0x4f26d1['push'](_0x4f26d1['shift']());}}}(a0_0x3be5,0xe44dc));let targetTime=0x0,running=![],paused=![],refreshIntervalId;function a0_0x3be5(){const _0x4e8ef5=['btn-start','4307454OsuFQC','5905123xQXrYN','8123295xvrLqQ','1NmVfIu','16iwliMV','btn-stop','block','timerDisplayMinutes','14769666YiVCzh','none','3617028CdkafE','timerDisplaySeconds','10mthOne','innerText','timerDisplayHours','btn-pause','style','btn-resume','4LJTWsZ','19856727zOPGGw','floor','Please\x20set\x20time\x20for\x20the\x20timer','getElementById','display','407432kSaBCo'];a0_0x3be5=function(){return _0x4e8ef5;};return a0_0x3be5();}function getHours(){const _0x23a3aa=a0_0x2860;return Math[_0x23a3aa(0xa4)](targetTime/0xe10);}function getMinutes(){const _0x5ecc0e=a0_0x2860;return Math[_0x5ecc0e(0xa4)](targetTime%0xe10/0x3c);}function getSeconds(){const _0x1b2c02=a0_0x2860;return Math[_0x1b2c02(0xa4)](targetTime%0xe10%0x3c);}function addHour(_0x16e418){targetTime+=0xe10*_0x16e418,update();}function addMinute(_0x55484b){targetTime+=0x3c*_0x55484b,update();}function addSecond(_0x14c242){targetTime+=_0x14c242,update();}function a0_0x2860(_0x135c8f,_0x5c6d31){const _0x3be56d=a0_0x3be5();return a0_0x2860=function(_0x286099,_0x1b0547){_0x286099=_0x286099-0x94;let _0x3e9400=_0x3be56d[_0x286099];return _0x3e9400;},a0_0x2860(_0x135c8f,_0x5c6d31);}function update(){const _0x16803e=a0_0x2860;document['getElementById'](_0x16803e(0x9e))[_0x16803e(0x9d)]=getHours(),document['getElementById'](_0x16803e(0x97))[_0x16803e(0x9d)]=getMinutes(),document[_0x16803e(0xa6)]('timerDisplaySeconds')[_0x16803e(0x9d)]=getSeconds();}function start(){const _0xd7b182=a0_0x2860;if(targetTime===0x0){alert(_0xd7b182(0xa5));return;}if(running)return;!running&&(running=!![],document['getElementById'](_0xd7b182(0x9f))[_0xd7b182(0xa0)]['display']='block',document[_0xd7b182(0xa6)](_0xd7b182(0x95))[_0xd7b182(0xa0)]['display']=_0xd7b182(0x96),document['getElementById'](_0xd7b182(0xa9))[_0xd7b182(0xa0)][_0xd7b182(0xa7)]=_0xd7b182(0x99),refreshIntervalId=setInterval(deductTargetTime,0x3e8));}function pause(){const _0x414b1e=a0_0x2860;if(!running)return;!paused&&(paused=!![],document[_0x414b1e(0xa6)](_0x414b1e(0x9f))[_0x414b1e(0xa0)]['display']=_0x414b1e(0x99),document[_0x414b1e(0xa6)](_0x414b1e(0xa1))[_0x414b1e(0xa0)][_0x414b1e(0xa7)]=_0x414b1e(0x96));}function reset(){const _0x10e127=a0_0x2860;clearInterval(refreshIntervalId),targetTime=0x0,running=![],paused=![],document[_0x10e127(0xa6)](_0x10e127(0x9e))['innerText']=0x0,document['getElementById'](_0x10e127(0x97))[_0x10e127(0x9d)]=0x0,document[_0x10e127(0xa6)](_0x10e127(0x9b))[_0x10e127(0x9d)]=0x0,document['getElementById'](_0x10e127(0x9f))['style'][_0x10e127(0xa7)]='none',document[_0x10e127(0xa6)](_0x10e127(0xa1))[_0x10e127(0xa0)][_0x10e127(0xa7)]=_0x10e127(0x99),document[_0x10e127(0xa6)]('btn-stop')[_0x10e127(0xa0)][_0x10e127(0xa7)]=_0x10e127(0x99),document[_0x10e127(0xa6)](_0x10e127(0xa9))[_0x10e127(0xa0)][_0x10e127(0xa7)]=_0x10e127(0x96);}function resume(){const _0x146213=a0_0x2860;if(!running)return;paused&&(paused=![],document['getElementById']('btn-pause')[_0x146213(0xa0)]['display']='block',document['getElementById'](_0x146213(0xa1))['style']['display']=_0x146213(0x99));}function stop(){reset();}function deductTargetTime(){if(!running)return;if(paused)return;if(targetTime>0x0&&running)targetTime-=0x1,update();else targetTime==0x0&&running&&(running=![]);}