//const tresHora = 60 * 60 * 3 * 1000; //*1000 pois está em milésimos de segundo
//const umDia = 60 * 60 * 24 *1000;
const data = new Date(1707577035980);//meses comecam do zero
console.log('Dia ', data.getDate());
console.log('Mês ', data.getMonth()); //Mês começa do zero
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Min ', data.getMinutes());
console.log('Seg ', data.getSeconds());
console.log('Ms ', data.getMilliseconds());
console.log('Dia semana ', data.getDay()); //0 = Dom 6=Sáb
console.log(data.toString());
/*console.log(Date.now())*/