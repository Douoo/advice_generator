fetch('https://api.adviceslip.com/advice').then(res=>{
    if(res.ok){
        return res.json();
    }else{

    }
}).then(data=>{
    console.log(data['slip'])
    var advice=data['slip']['advice'];
    var adviceId=data['slip']['id'];

    document.querySelector("#advice_id").textContent="ADVICE #"+adviceId;
    document.querySelector("#advice").textContent='"'+advice+'"';
})