d3.json("samples.json").then(function(data){
    console.log(data);
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[2];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});