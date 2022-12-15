const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '957c6c667emsha5a9102b5f9bbd0p1aaa0bjsnb51bc818c1d8',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};


fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=basketball&Timezone=-7', options)
    .then(res => res.json())
    .then(resp => {
        var x =resp['Stages'];
        console.log(x);
        for(var e of x) {
            var up = e['Events'];
            for(var z of up) {
                z["Stg"]["Snm"]
             console.log(z["Stg"]["Snm"])
            var scores = document.querySelector('#scores');
                scores.innerHTML = ("TUNE IN to Today's game where " + z['T1'] + " plays " + z['T2']);
             document.getElementById('game1').innerHTML =  z["Stg"]["Snm"];
             document.getElementById('game1').setAttribute("class","game");
            //  document.getElementById('team11').innerHTML = z['T1'][0]['Nm'] + ' v/s ' + z['T2'][0]['Nm'];
             var team1Img= 'https://lsm-static-prod.livescore.com/medium/' + z['T1'][0]['Img']
                document.getElementById('team1').innerHTML = `<img src='${team1Img}'>`;
                var team2Img= 'https://lsm-static-prod.livescore.com/medium/' + z['T2'][0]['Img']
                document.getElementById('team2').innerHTML = `<img src='${team2Img}'>`;
                console.log(z['T1'][0]['Nm'] + ' v/s ' + z['T2'][0]['Nm']);

                document.getElementById('team2').innerHTML += '<br>';
                document.getElementById('team2').innerHTML += 'Ist Quater: ' + z['Tr2Q1'] + '<br><br>';
                document.getElementById('team2').innerHTML += 'IInd Quater:  ' + z['Tr2Q2'] + '<br><br>';
                document.getElementById('team2').innerHTML += 'IIIrd Quater:   ' + z['Tr2Q3'] + '<br><br>';
                document.getElementById('team2').innerHTML += 'IVth Quater:   ' + z['Tr2Q4'] + '<br><br>';
                document.getElementById('team2').innerHTML += 'TOTAL ' + z['Tr2'] + '<br><br>';
                // document.getElementById('team2').innerHTML += z['Tr2'];
                
                document.getElementById('team1').innerHTML += '<br>';
                document.getElementById('team1').innerHTML +='Ist Quater: ' + z['Tr1Q1']+ '<br><br>';
                document.getElementById('team1').innerHTML +='IInd Quater: ' + z['Tr1Q1']+ '<br><br>';
                document.getElementById('team1').innerHTML +='IIIrdt Quater: ' + z['Tr1Q1']+ '<br><br>';
                document.getElementById('team1').innerHTML +='IVth Quater: ' + z['Tr1Q1']+ '<br><br>';
                document.getElementById('team1').innerHTML += 'TOTAL :' + z['Tr1'] + '<br><br>';
                console.log('HOME_SCORE_QUARTER_FIRST ' + z['Tr1Q1']);
                console.log('HOME_SCORE_QUARTER_SECOND ' + z['Tr1Q2']);
                console.log('HOME_SCORE_QUARTER_THIRD ' + z['Tr1Q3']);
                console.log('HOME_SCORE_QUARTER_FOURTH ' + z['Tr1Q4']);
                console.log('HOME_SCORE_TOTAL  ' + z['Tr1']);

                // document.getElementById('team1').innerHTML += z['Tr1'];
                console.log('<------------------------------------>');
            }
        }

        
        console.log();
    })
    .catch(err => {
        console.log(err);
    });
