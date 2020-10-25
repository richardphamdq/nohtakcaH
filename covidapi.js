$.getJSON("https://api.covidtracking.com/v1/us/daily.json",function getPositive(data){
    let positive = data[0].positive;
    $(".positive").append(positive);
    let negative = data[0].negative;
    $(".negative").append(negative);
    let deaths = data[0].death;
    $(".deaths").append(deaths);
    let deathIncrease = data[0].deathIncrease;
    $(".deathIncrease").append(deathIncrease);
});
