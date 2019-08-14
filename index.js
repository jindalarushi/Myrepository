this.baseToTermCurrencies =[
    ["AUDAUD","1.1"],
    ["AUDCAD","USD"],
    ["AUDCNY","USD"],
    ["AUDCZK","USD"],
    ["AUDDKK","USD"],
    ["AUDEUR","USD"],
    ["AUDGBP","USD"],
    ["AUDJPY","USD"],
    ["AUDNOK","USD"],
    ["AUDNZD","USD"],
    ["AUDUSD","D"],
     
    ["CADAUD","USD"],
    ["CADCAD","1.1"],
    ["CADCNY","USD"],
    ["CADCZK","USD"],
    ["CADDKK","USD"],
    ["CADEUR","USD"],
    ["CADGBP","USD"],
    ["CADJPY","USD"],
    ["CADNOK","USD"],
    ["CADNZD","USD"],
    ["CADUSD","D"],
    
    ["CNYAUD","USD"],
    ["CNYCAD","USD"],
    ["CNYCNY","1.1"],
    ["CNYCZK","USD"],
    ["CNYDKK","USD"],
    ["CNYEUR","USD"],
    ["CNYGBP","USD"],
    ["CNYJPY","USD"],
    ["CNYNOK","USD"],
    ["CNYNZD","USD"],
    ["CNYUSD","Inv"],
    
    ["CZKAUD","USD"],
    ["CZKCAD","USD"],
    ["CZKCNY","USD"],
    ["CZKCZK","1.1"],
    ["CZKDKK","EUR"],
    ["CZKEUR","Inv"],
    ["CZKGBP","USD"],
    ["CZKJPY","USD"],
    ["CZKNOK","EUR"],
    ["CZKNZD","USD"],
    ["CZKUSD","EUR"],
    
    ["DKKAUD","USD"],
    ["DKKCAD","USD"],
    ["DKKCNY","USD"],
    ["DKKCZK","EUR"],
    ["DKKDKK","1.1"],
    ["DKKEUR","Inv"],
    ["DKKGBP","USD"],
    ["DKKJPY","USD"],
    ["DKKNOK","EUR"],
    ["DKKNZD","USD"],
    ["DKKUSD","EUR"],
    
    ["EURAUD","USD"],
    ["EURCAD","USD"],
    ["EURCNY","USD"],
    ["EURCZK","D"],
    ["EURDKK","D"],
    ["EUREUR","1.1"],
    ["EURGBP","USD"],
    ["EURJPY","USD"],
    ["EURNOK","D"],
    ["EURNZD","USD"],
    ["EURUSD","D"],
    
    ["GBPAUD","USD"],
    ["GBPCAD","USD"],
    ["GBPCNY","USD"],
    ["GBPCZK","USD"],
    ["GBPDKK","USD"],
    ["GBPEUR","USD"],
    ["GBPGBP","1.1"],
    ["GBPJPY","USD"],
    ["GBPNOK","USD"],
    ["GBPNZD","USD"],
    ["GBPUSD","D"],
    
    ["JPYAUD","USD"],
    ["JPYCAD","USD"],
    ["JPYCNY","USD"],
    ["JPYCZK","USD"],
    ["JPYDKK","USD"],
    ["JPYEUR","USD"],
    ["JPYGBP","USD"],
    ["JPYJPY","1.1"],
    ["JPYNOK","USD"],
    ["JPYNZD","USD"],
    ["JPYUSD","Inv"],
    
    ["NOKAUD","USD"],
    ["NOKCAD","USD"],
    ["NOKCNY","USD"],
    ["NOKCZK","EUR"],
    ["NOKDKK","EUR"],
    ["NOKEUR","Inv"],
    ["NOKGBP","USD"],
    ["NOKJPY","USD"],
    ["NOKNOK","1.1"],
    ["NOKNZD","USD"],
    ["NOKUSD","EUR"],
    
    ["NZDAUD","USD"],
    ["NZDCAD","USD"],
    ["NZDCNY","USD"],
    ["NZDCZK","USD"],
    ["NZDDKK","USD"],
    ["NZDEUR","USD"],
    ["NZDGBP","USD"],
    ["NZDJPY","USD"],
    ["NZDNOK","USD"],
    ["NZDNZD","1.1"],
    ["NZDUSD","D"],
    
    ["USDAUD","Inv"],
    ["USDCAD","Inv"],
    ["USDCNY","Inv"],
    ["USDCZK","EUR"],
    ["USDDKK","EUR"],
    ["USDEUR","Inv"],
    ["USDGBP","Inv"],
    ["USDJPY","D"],
    ["USDNOK","EUR"],
    ["USDNZD","Inv"],
    ["USDUSD","1.1"]
        
]

this.rateArray =[
    ["AUDUSD","0.8371"],
    ["CADUSD","0.8711"],
    ["USDCNY","6.1715"],
    ["EURUSD","1.2315"],
    ["GBPUSD","1.5683"],
    ["NZDUSD","0.7750"],
    ["USDJPY","119.95"],
    ["EURCZK","27.6028"],
    ["EURDKK","7.4405"],
    ["EURNOK","8.6651"]
]
this.fromCurrency = "";
this.toCurrency ="";
this.amount = "";
this.finalResult ="";
this.temp =1;

let convertCurrency = () =>
{
    this.temp =1;
    var fromCurr = document.getElementById("fromCurrency");
    this.fromCurrency = fromCurr.options[fromCurr.selectedIndex].value;
    var toCurr = document.getElementById("toCurrency");
    this.toCurrency = toCurr.options[toCurr.selectedIndex].value;
    this.amount = document.getElementById("amount").value;

    convertCurrency1(this.fromCurrency, this.toCurrency);
}

let convertCurrency1 = (fromCurrency, toCurrency) =>
{
    
    var fromTo = fromCurrency+toCurrency;
    var toFrom = toCurrency+fromCurrency;
    
    this.baseToTermCurrencies.find(element =>
                            {
        let currentRecord = `${element}`;
        let record0 = currentRecord.split(',')[0];
        let record1 = currentRecord.split(',')[1];
        if(record0 === fromTo)
            {
                calculateLogic(record1, fromTo, toFrom, fromCurrency, toCurrency);
            }
        
    })
    
}

let calculateLogic = (record1, fromTo, toFrom, fromCurrency, toCurrency) =>
{
    var result;
    if(record1 === '1.1')
            {
                result = this.amount *1;
                if(toCurrency === 'JPY')
                    result = result.toFixed(0);
                else
                    result = result.toFixed(2);
                    this.finalResult = result;
                document.getElementById("result").innerHTML = this.finalResult;
                return;
            }
            else if(record1 === 'D')
            {
                this.rateArray.map(rate =>
                    {
                        let currRate = `${rate}`;
                        if(currRate.split(',')[0] === fromTo)
                        {
                         result = this.amount * currRate.split(',')[1];
                         if(toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);
                         this.finalResult = result;
                       document.getElementById("result").innerHTML = this.finalResult;
                            return;
                        }
                    })
                //alert('Unable to find rate for'+`${fromCurrency}`+'/'+`${toCurrency}`);
            }
            else if(record1 === 'Inv')
            {
                this.rateArray.map(rate =>
                    {
                        let currRate1 = `${rate}`;
                        if(currRate1.split(',')[0] === toFrom)
                        {
                         result = this.amount * (1/currRate1.split(',')[1]);
                         if(toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);
                      this.finalResult = result;
                    document.getElementById("result").innerHTML = this.finalResult;
                            return;
                        }
                    })
               // alert('Unable to find rate for'+`${fromCurrency}`+'/'+`${toCurrency}`);
            }
            else{
                //this.crossPoints ++;
                //alert(crossPoints);
                let fromCurr = fromCurrency;
                let toCurr = record1;
                convertCurrency1(fromCurr, toCurr);
                let r1 = (this.temp * this.finalResult)/this.amount;
                this.temp = r1;
                let fromCurr1 = record1;
                let toCurr1 = this.toCurrency;
                convertCurrency1(fromCurr1, toCurr1);
                let r2 =this.finalResult;
                result = (r1 * r2);
                if(this.toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);

                this.finalResult= result;
                document.getElementById("result").innerHTML = this.finalResult;


            }
    
}