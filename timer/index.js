(function(_0x3c30fb,_0x24b36d){const _0x2bb213=a0_0x336c,_0x22ee5b=_0x3c30fb();while(!![]){try{const _0x3ca1f4=parseInt(_0x2bb213(0x171))/0x1+parseInt(_0x2bb213(0x16f))/0x2+parseInt(_0x2bb213(0x16d))/0x3+parseInt(_0x2bb213(0x176))/0x4*(-parseInt(_0x2bb213(0x179))/0x5)+parseInt(_0x2bb213(0x17c))/0x6+-parseInt(_0x2bb213(0x169))/0x7+parseInt(_0x2bb213(0x17e))/0x8*(-parseInt(_0x2bb213(0x16c))/0x9);if(_0x3ca1f4===_0x24b36d)break;else _0x22ee5b['push'](_0x22ee5b['shift']());}catch(_0x430bf7){_0x22ee5b['push'](_0x22ee5b['shift']());}}}(a0_0x4430,0x86bce));let targetTime=0x0,running=![],paused=![],refreshIntervalId;function getHours(){const _0x2103dc=a0_0x336c;return Math[_0x2103dc(0x167)](targetTime/0xe10);}function getMinutes(){const _0x16eaaa=a0_0x336c;return Math[_0x16eaaa(0x167)](targetTime%0xe10/0x3c);}function getSeconds(){const _0x1281dc=a0_0x336c;return Math[_0x1281dc(0x167)](targetTime%0xe10%0x3c);}function addHour(_0x138549){targetTime+=0xe10*_0x138549,update();}function addMinute(_0xbae60c){targetTime+=0x3c*_0xbae60c,update();}function addSecond(_0x24ce3c){targetTime+=_0x24ce3c,update();}function update(){const _0x434123=a0_0x336c;document[_0x434123(0x178)](_0x434123(0x17b))[_0x434123(0x174)]=getHours(),document[_0x434123(0x178)](_0x434123(0x175))[_0x434123(0x174)]=getMinutes(),document[_0x434123(0x178)](_0x434123(0x17a))[_0x434123(0x174)]=getSeconds();}function start(){const _0x31b8be=a0_0x336c;if(targetTime===0x0){alert(_0x31b8be(0x177));return;}if(running)return;!running&&(running=!![],document[_0x31b8be(0x178)]('btn-pause')[_0x31b8be(0x172)][_0x31b8be(0x173)]='block',document[_0x31b8be(0x178)](_0x31b8be(0x168))['style'][_0x31b8be(0x173)]='block',document[_0x31b8be(0x178)](_0x31b8be(0x16a))[_0x31b8be(0x172)][_0x31b8be(0x173)]=_0x31b8be(0x170),refreshIntervalId=setInterval(deductTargetTime,0x3e8));}function pause(){const _0x5c94ef=a0_0x336c;if(!running)return;!paused&&(paused=!![],document['getElementById']('btn-pause')[_0x5c94ef(0x172)][_0x5c94ef(0x173)]=_0x5c94ef(0x170),document[_0x5c94ef(0x178)]('btn-resume')[_0x5c94ef(0x172)][_0x5c94ef(0x173)]=_0x5c94ef(0x16e));}function reset(){const _0x2b3dd1=a0_0x336c;clearInterval(refreshIntervalId),targetTime=0x0,running=![],paused=![],document[_0x2b3dd1(0x178)](_0x2b3dd1(0x17b))[_0x2b3dd1(0x174)]=0x0,document[_0x2b3dd1(0x178)](_0x2b3dd1(0x175))[_0x2b3dd1(0x174)]=0x0,document[_0x2b3dd1(0x178)]('timerDisplaySeconds')['innerText']=0x0,document[_0x2b3dd1(0x178)](_0x2b3dd1(0x17d))[_0x2b3dd1(0x172)][_0x2b3dd1(0x173)]=_0x2b3dd1(0x170),document[_0x2b3dd1(0x178)](_0x2b3dd1(0x16b))[_0x2b3dd1(0x172)][_0x2b3dd1(0x173)]=_0x2b3dd1(0x170),document['getElementById'](_0x2b3dd1(0x168))['style'][_0x2b3dd1(0x173)]=_0x2b3dd1(0x170),document[_0x2b3dd1(0x178)]('btn-start')[_0x2b3dd1(0x172)][_0x2b3dd1(0x173)]=_0x2b3dd1(0x16e);}function resume(){const _0x280772=a0_0x336c;if(!running)return;paused&&(paused=![],document[_0x280772(0x178)]('btn-pause')[_0x280772(0x172)][_0x280772(0x173)]=_0x280772(0x16e),document['getElementById']('btn-resume')[_0x280772(0x172)][_0x280772(0x173)]=_0x280772(0x170));}function a0_0x336c(_0x5e6078,_0x5618e3){const _0x443065=a0_0x4430();return a0_0x336c=function(_0x336c94,_0x2c6e28){_0x336c94=_0x336c94-0x167;let _0x220e22=_0x443065[_0x336c94];return _0x220e22;},a0_0x336c(_0x5e6078,_0x5618e3);}function a0_0x4430(){const _0x20c6e6=['getElementById','10zVndIB','timerDisplaySeconds','timerDisplayHours','4281510QLScDw','btn-pause','2213240ljCPbQ','floor','btn-stop','658196nujDUo','btn-start','btn-resume','27DaLmqn','469056asLXPJ','block','1750392fPzxFA','none','292548FtGksG','style','display','innerText','timerDisplayMinutes','1123604zEaoSI','Please\x20set\x20time\x20for\x20the\x20timer'];a0_0x4430=function(){return _0x20c6e6;};return a0_0x4430();}function stop(){reset();}function deductTargetTime(){if(!running)return;if(paused)return;if(targetTime>0x0&&running)targetTime-=0x1,update();else targetTime==0x0&&running&&(running=![]);}