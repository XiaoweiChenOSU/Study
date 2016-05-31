/**
 * Created by Administrator on 2016/5/31.
 */
var EventUtil={
    //�����¼�
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type,handler);
        }else{
            element['on' + type]=handler;
        }
    },

    //ͨ��removeHandler
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on' + type,handler);
        }else{
            element['on' + type]=null;
        }
    }
};