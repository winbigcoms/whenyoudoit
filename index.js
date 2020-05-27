const $lottoBtn = document.getElementById('lotto');
$lottoBtn.onclick = function () {
  const $span = document.getElementById("number");
  let res =[];
  while(res.length < 7){
    const lottoNum = Math.floor(Math.random()*45)+1;
    if(res.includes(lottoNum))continue;
    res.push(lottoNum);
  }
  res.sort( (a,b) => a-b);
  $span.innerHTML = res.join();
}
