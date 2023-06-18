class Matrix {
    constructor(a) {
        this.a = a 

    }

    add(b) {

        var x=[[],[]]

        for(var i=0;i<this.a.length;i++)
        {
            for(var j=0;j<this.a[0].length;j++)
            {
                x[i][j]=this.a[i][j]+b[i][j];
            }
        }
        return x;
    }

    mul(b) {

        var x=[[],[]]

        for(var i=0;i<this.a.length;i++)
        {
            for(var j=0;j<b[0].length;j++)
            {
                var c=0;
                for(var t=0;t<this.a[0].length;t++)
                {
                    c=a[i][t]*b[t][j]+c;
                }
                x[i][j]=c;
            }
        }
        return x;
    }
}

var a=[[1,4],[2,3]],b=[[3,1],[5,2]];
var x=new Matrix(a)
console.log(x.add(b))
console.log(x.mul(b))
