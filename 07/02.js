function count(times) {
     let x={}
     let y
     for (y of times)
     {
        let z=x[y]
        if (z==null)
          x[y]=1
        else
          x[y]=x[y]+1
     }
    return x
  }

  var times=['the','meet','over','cook','who','is','the','cook']
  var x = count(times)
  console.log(count(times));
