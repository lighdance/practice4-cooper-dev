const btn = document.getElementById('btn');
const msgDom = document.getElementById('msg');

btn.onclick = function(){
    msgDom.innerText = "✅ 协作成功！两个人分工完成代码，通过Git提交到dev分支";
}