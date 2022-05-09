prompt = require('prompt-sync')();


var personagem = {
    vida : [100, 100], 
    moedas : 100 ,
    ataques : {
        ataqueNormal: [15, 'fisico', 0],
        ataqueEncantado: [12, 'magico', 0]
    },   
    pocoes : 2
};

// ataques tem como padrão na array [ DANO  ,  TIPO  ,  PREÇO]



var arvid = {
    salvo : 0,
    apanhou : 0
};




var fogo = {
    vida: [90, 90],
    ataques: {
        soco : 10,
        golpeDeFogo : 25
    }
};

var planta = {
    vida: [80, 80],
    ataques: {
        soco : 10,
        golpeDePlanta : 20
    }
};

var pedra = {
    vida: [130, 130],
    ataques: {
        soco : 5,
        golpeDePedra : 15
    }
};

var eletrico = {
    vida: [85, 85],
    ataques: {
        soco : 10,
        golpeEletrico : 50
    }
};

var agua = {
    vida: [80, 80],
    ataques: {
        soco : 10,
        golpeDeAgua : 25
    }
};






function pocao(){

    if(personagem.pocoes > 0 && personagem.vida[0] < personagem.vida[1]){

        console.log(`Sua vida atual é de ${personagem.vida[0]} pontos em um total de ${personagem.vida[1]}.`);        
        console.log('Gostaria de usar uma poção?');
        let cura = prompt().toLowerCase();
        console.log();

            if(cura == 'sim'){
                                       
                console.log(`VIDA: ${personagem.vida[0]}`);                                   
                console.log(`VIDA MÁXIMA: ${personagem.vida[1]}`);                    
                console.log(`Poções: ${personagem.pocoes}`);                                
                console.log();
                console.log('Quantas poções usar? ');        
                let quant = +prompt();                            
                let cura = quant * 15
                console.log();   
                    
                if(quant > personagem.pocoes){
                    quant = personagem.pocoes      
                    console.log('Está tentando usar mais poções do que possuí? essas poções viciam, cuidado.');
                    console.log();
                };
                    
                    personagem.vida[0] += cura                                       
                    personagem.pocoes -= quant                  
                    
                        if(personagem.vida[0] > personagem.vida[1]){                               
                            personagem.vida[0] = personagem.vida[1]
                            console.log('Sua cura disponibilizada execeu a vida máxima...');                       
                            console.log();
                        };                 
                   
                        console.log(`Você foi curado ${cura} pontos`);
                        console.log(`VIDA ATUAL: ${personagem.vida[0]} / ${personagem.vida[1]}`);
                        console.log();
                    } 

                }else if(personagem.pocoes == 0 && personagem.vida[0] < personagem.vida[1]){
                console.log('Seus pontos de vida não estão em seu limite... e você infelizmente não tem poções.')
                console.log();
            
            }

};






function faseAgua(){

    console.log('Em meio a viagem os ventos pararam e o maré se acalmou, o navio se encontrava perto de um rochedo no meio do mar... ');
    console.log();
    console.log('Você encontrou uma Sereia em meio ao rochedo!! inimigo estilo água.');
    console.log('Gostaria de enfrenta-la? ');
    batalhar = prompt("Digite 'Sim' para lutar. ").toLowerCase();
    console.log();

    if(batalhar == 'sim'){
        
        while(agua.vida[0] > 0 && personagem.vida[0] > 0){
            console.log();
            console.log('SUA VIDA: ', personagem.vida[0]);
            console.log('VIDA DA SEREIA: ', agua.vida[0]);
            console.log();
            
            console.log();
            console.log('Seus ataques: ', personagem.ataques);
            console.log('*Digite exatamente o nome do golpe.');
            ataque = prompt('Escolha: ');
            console.log();
            
            dano = personagem["ataques"][ataque][0];
            tipo = personagem["ataques"][ataque][1];

            if(tipo == 'agua' || tipo == 'eletrico'){
                console.log('ATAQUE CRITICO! ');
                console.log(`++${(dano * 1.5)} Dano.`);
                agua.vida[0] -= (dano * 1.5);

            }else{
            console.log(`++${dano} Dano.`)
            agua.vida[0] -= dano 

            }

            if(planta.vida <= 0){
                console.log();
                console.log('--------------');
                console.log();
                break
            }

            console.log();
            console.log('-----');
            console.log();
            

            aleat = Math.floor(Math.random() * (5))
            
            if(aleat == 1){
                console.log('A Sereia usou o Jato De Agua!');
                console.log(`--${agua.ataques.golpeDeAgua} Vida.`);
                personagem.vida[0] = personagem.vida[0] - agua.ataques.golpeDeAgua
            
            }else{
                console.log('A Sereia usou o soco.');
                console.log(`++${agua.ataques.soco} Vida.`);
                personagem.vida[0] = personagem.vida[0] - agua.ataques.soco
            
            }
            
            console.log();
            console.log('--------------');
            console.log();
                   
            }

            
            if(agua.vida[0] <= 0){
                console.log('VIDA DA SEREIA: 0');
                console.log('Você vendeu!')
               
                ganhos = Math.floor(agua.vida[1] / 4)
                console.log(`+ ${ganhos} moedas`)
                personagem.moedas += ganhos
                console.log('Total de moedas: ', personagem.moedas)
                console.log();
                
                agua.vida[1] += 20
                agua.vida[0] = agua.vida[1]
                agua.ataques.golpeDeAgua +=  10
                agua.ataques.soco += 5
                
                }else if(personagem.vida[0] <= 0){
                    personagem.vida[0] = 0
                    console.log('SUA VIDA: 0');
                    console.log('Você perdeu...');
                    console.log();
                
                }
        
        }
    
};


function faseEletrico(){

    console.log('Uma forte tempestade de raios pega os tripulantes do navio de surpresa, ninguém sabia explicar como aquilo surgiu... ')
    console.log();
    console.log('Você avista um Aberrado Elétrico, um tipo de monstro, entre as nuvens!!');
    console.log('Gostaria de enfrenta-lo? ');
    batalhar = prompt("Digite 'Sim' para lutar. ").toLowerCase();
    console.log();

    if(batalhar == 'sim'){
        
        while(eletrico.vida[0] > 0 && personagem.vida[0] > 0){
            console.log();
            console.log('SUA VIDA: ', personagem.vida[0]);
            console.log('VIDA DO ABERRADO: ', eletrico.vida[0]);
            console.log();
            
            console.log();
            console.log('Seus ataques: ', personagem.ataques);
            console.log('*Digite exatamente o nome do golpe. ');
            ataque = prompt('Escolha: ');
            console.log();
            
            dano = personagem["ataques"][ataque][0];
            tipo = personagem["ataques"][ataque][1];

            if(tipo == 'pedra'){
                console.log('ATAQUE CRITICO! ');
                console.log(`++${(dano * 1.5)} Dano.`);
                eletrico.vida[0] -= (dano * 1.5);

            }else{
            console.log(`++${dano} Dano.`)
            eletrico.vida[0] -= dano 

            }

            if(eletrico.vida <= 0){
                console.log();
                console.log('--------------');
                console.log();
                break
            }

            console.log();
            console.log('-----');
            console.log();
        

            aleat = Math.floor(Math.random() * (7));
            
            if(aleat == 1){
                console.log('O Aberrado usou o Raio.');
                console.log(`--${eletrico.ataques.golpeEletrico} Vida.`);
                personagem.vida[0] = personagem.vida[0] - eletrico.ataques.golpeEletrico
            
            }else{
                console.log('O Aberrado usou o soco.');
                console.log(`--${eletrico.ataques.soco} Vida.`);
                personagem.vida[0] = personagem.vida[0] - eletrico.ataques.soco
            
            }

            console.log();
            console.log('--------------');
            console.log();
     
        }


        if(eletrico.vida[0] <= 0){
            console.log('VIDA DO ABERRADO: 0');
            console.log('Você vendeu!')
           
            ganhos = Math.floor(eletrico.vida[1] / 4)
            console.log(`+ ${ganhos} moedas`)
            personagem.moedas += ganhos
            console.log('Total de moedas: ', personagem.moedas)
            console.log();
            
            eletrico.vida[1] += 20
            eletrico.vida[0] = eletrico.vida[1]
            eletrico.ataques.golpeEletrico +=  10
            eletrico.ataques.soco += 5
            
            }else if(personagem.vida[0] <= 0){
                personagem.vida[0] = 0
                console.log('SUA VIDA: 0');
                console.log('Você perdeu...')
            
            
            }
    
    }
    
};


function fasePedra(){

    console.log('Durante sua viagem pelas montanhas você sentiu as rochas que estava encima se mexerem...')
    console.log();
    console.log('Sem perceber caminhou sobre um Golem de Pedra!!');
    console.log('Gostaria de enfrenta-lo? ');
    batalhar = prompt("Digite 'Sim' para lutar. ").toLowerCase();
    console.log();

    if(batalhar == 'sim'){
        
        while(pedra.vida[0] > 0 && personagem.vida[0] > 0){
            console.log();
            console.log('SUA VIDA: ', personagem.vida[0]);
            console.log('VIDA DO GOLEM: ', pedra.vida[0]);
            console.log();
            
            console.log();
            console.log('Seus ataques: ', personagem.ataques);
            console.log('*Digite exatamente o nome do golpe. ');
            ataque = prompt('*Escolha: ');
            console.log();
            
            dano = personagem["ataques"][ataque][0];
            tipo = personagem["ataques"][ataque][1];

            if(tipo == 'agua' || tipo == 'planta'){
                console.log('ATAQUE CRITICO! ');
                console.log(`++${(dano * 1.5)} Dano.`);
                pedra.vida[0] -= (dano * 1.5);

            }else{
            console.log(`++${dano} Dano.`);
            pedra.vida[0] -= dano 

            }

            if(pedra.vida <= 0){
                console.log();
                console.log('--------------');
                console.log();
                break
            }

            console.log();
            console.log('-----');
            console.log();
        

            aleat = Math.floor(Math.random() * (3));
            
            if(aleat == 1){
                console.log('O Golem lançou um Pedregulho!');
                console.log(`--${pedra.ataques.golpeDePedra} Vida.`);
                personagem.vida[0] = personagem.vida[0] - pedra.ataques.golpeDePedra
            
            }else{
                console.log('O Golem usou o soco.');
                console.log(`--${pedra.ataques.soco} Vida.`);
                personagem.vida[0] = personagem.vida[0] - pedra.ataques.soco
            
            }

            console.log();
            console.log('--------------');
            console.log();

        }

    
        if(pedra.vida[0] <= 0){
            console.log('VIDA DO GOLEM: 0');
            console.log('Você vendeu!');
           
            ganhos = Math.floor(pedra.vida[1] / 4);
            console.log(`+ ${ganhos} moedas`);
            personagem.moedas += ganhos
            console.log('Total de moedas: ', personagem.moedas);
            console.log();
            
            pedra.vida[1] += 20
            pedra.vida[0] = pedra.vida[1]
            pedra.ataques.golpeDePedra +=  10
            pedra.ataques.soco += 5
            
            }else if(personagem.vida[0] <= 0){
                personagem.vida[0] = 0
                console.log('SUA VIDA: 0');
                console.log('Você perdeu...')
            
            }
        
    
    }
    
};


function fasePlanta(){

    console.log('As chances de não se encontrar com uma criatura perigosa em meio a está floresta são muito baixas...')
    console.log();
    console.log('Em poucos momentos, dos arbustos sai uma Mandrágora!! inimigo estilo planta.');
    console.log('Gostaria de enfrenta-la? ');
    batalhar = prompt("Digite 'Sim' para lutar. ").toLowerCase();
    console.log();

    if(batalhar == 'sim'){
        
        while(planta.vida[0] > 0 && personagem.vida[0] > 0){
            console.log();
            console.log('SUA VIDA: ', personagem.vida[0]);
            console.log('VIDA DA MANDRÁGORA: ', planta.vida[0]);
            console.log();
            
            console.log();
            console.log('Seus ataques: ', personagem.ataques);
            console.log('*Digite exatamente o nome do golpe.');
            ataque = prompt('Escolha: ');
            console.log();
            
            dano = personagem["ataques"][ataque][0];
            tipo = personagem["ataques"][ataque][1];

            if(tipo == 'fogo'){
                console.log('ATAQUE CRITICO! ');
                console.log(`++${(dano * 1.5)} Dano.`);
                planta.vida[0] -= (dano * 1.5);

            }else{
            console.log(`++${dano} Dano.`)
            planta.vida[0] -= dano 

            }

            if(planta.vida <= 0){
                console.log();
                console.log('--------------');
                console.log();
                break
            }
            
            console.log();
            console.log('-----');
            console.log();
        

            aleat = Math.floor(Math.random() * (4))
            
            if(aleat == 1){
                console.log('A Mandrágora usou o Chicote de Cipó!');
                console.log(`--${planta.ataques.golpeDePlanta} Vida.`)
                personagem.vida[0] = personagem.vida[0] - planta.ataques.golpeDePlanta
            
            }else{
                console.log('O monstro usou o Soco.')
                console.log(`--${planta.ataques.soco} Vida.`)
                personagem.vida[0] = personagem.vida[0] - planta.ataques.soco
            
            }

            console.log();
            console.log('--------------');
            console.log();     
            
        }

        
        if(planta.vida[0] <= 0){
            console.log('VIDA DA MANDRÁGORA: 0');
            console.log('Você vendeu!')
           
            ganhos = Math.floor(planta.vida[1] / 4)
            console.log(`+ ${ganhos} moedas`)
            personagem.moedas += ganhos
            console.log('Total de moedas: ', personagem.moedas)
            console.log();
            
            planta.vida[1] += 20
            planta.vida[0] = planta.vida[1]
            planta.ataques.golpeDePlanta +=  10
            planta.ataques.soco += 5
            
            }else if(personagem.vida[0] <= 0){
                personagem.vida[0] = 0
                console.log('SUA VIDA: 0');
                console.log('Você perdeu...')
            
            
            }  
   
   
   
   
    }
    
};


function faseFogo(){
    
    console.log('Ao pé do antigo vulcão Colima você sente uma sensação estranha...');
    console.log();
    console.log('De trás de uma árvore queimada surge um Diabrete!! inimigo estilo fogo.');
    console.log('Gostaria de enfrenta-lo? ');
    batalhar = prompt("Digite 'Sim' para lutar. ").toLowerCase();
    console.log();

    if(batalhar == 'sim'){
        
        while(fogo.vida[0] > 0 && personagem.vida[0] > 0){
            console.log();
            console.log('SUA VIDA: ', personagem.vida[0]);
            console.log('VIDA DO DIABRETE: ', fogo.vida[0]);
            console.log();
            
            console.log();
            console.log('Seus ataques: ', personagem.ataques);
            console.log('*Digite exatamente o nome do golpe. ');
            ataque = prompt('*Escolha: ');
            console.log();
            
            dano = personagem["ataques"][ataque][0];
            tipo = personagem["ataques"][ataque][1];

            if(tipo == 'agua' || tipo == 'pedra'){
                console.log('ATAQUE CRITICO! ');
                console.log(`++${(dano * 1.5)} Dano.`);
                fogo.vida[0] -= (dano * 1.5);

            }else{
            console.log(`++ ${dano} Dano.`);
            fogo.vida[0] -= dano 

            }

            if(fogo.vida <= 0){
                console.log();
                console.log('--------------');
                console.log();  
                break
            }

            console.log();
            console.log('-----');
            console.log();
            

            aleat = Math.floor(Math.random() * (5))
            
            if(aleat == 4){
                console.log('O Diabrete usou o Tridente de Fogo!');
                console.log(`--${fogo.ataques.golpeDeFogo} Vida.`);
                personagem.vida[0] -= fogo.ataques.golpeDeFogo
            
            }else{
                console.log('O Diabrete usou o soco.');
                console.log(`--${fogo.ataques.soco} Vida.`);
                personagem.vida[0] -= fogo.ataques.soco
            
            }

            console.log();
            console.log('--------------');
            console.log();

                
            }
        

    if(fogo.vida[0] <= 0){
        console.log('VIDA DO DIABRETE: 0');
        console.log('Você vendeu!')
        
        ganhos = Math.floor(fogo.vida[1] / 4)
        console.log(`+ ${ganhos} moedas`)
        personagem.moedas += ganhos
        console.log('Total de moedas: ', personagem.moedas)
        console.log();
        
        fogo.vida[1] += 20
        fogo.vida[0] = fogo.vida[1]
        fogo.ataques.golpeDeFogo +=  10
        fogo.ataques.soco += 5
        
        }else if(personagem.vida[0] <= 0){
            personagem.vida[0] = 0
            console.log('SUA VIDA: 0');
            console.log('Você perdeu...');
          
        }
    }

};






function morte(){
    if(personagem.vida[0] <= 0){
        return 'morreu'
    }
};






function faseDragao(){
    
    console.log('Encontramos o Dragão!');
    console.log('Boa sorte e boa batalha guerreiro!!');
    console.log();

    dragao = {
        vida : 200,
        ataques : {
            chamas : 40,
            reacaoTotal : 1
        }
    }
  

    while(dragao.vida > 0 && personagem.vida[0] > 0){
        console.log();
        console.log('SUA VIDA: ', personagem.vida[0]);
        console.log('VIDA DO DRAGÃO: ', dragao.vida);
        console.log();

        console.log();
        console.log('Seus ataques: ', personagem.ataques);
        console.log('*Digite exatamente o nome do golpe.');
        ataque = prompt('Esolha: ');
        console.log();

        let dano = personagem["ataques"][ataque][0];
        let tipo = personagem["ataques"][ataque][1];

            
            if(tipo == 'agua'){
                console.log('ATAQUE CRITICO!');
                dano = Math.floor(dano * 1.5);
                console.log(`++${dano} Dano.`);
                dragao.vida -= dano
                console.log();
        
            }else{
                console.log(`++${dano} Dano.`);
                console.log();
                dragao.vida -= dano

            }
            

            if(dragao.vida <= 0){
                console.log('--------------');
                console.log();
                break
            }
            
            console.log();           
            console.log('-----');       
            console.log();

            golpeDrag = Math.floor(Math.random() * (4));
        
            if(golpeDrag == 1){
                console.log('O Dragão utilizou Reação Total! Seu dano retornou.');
                console.log(`--${dano} Dano.`)
                personagem.vida[0] -= dano
                console.log();

            }else{
                console.log('O Dragão atacou com Chamas.');
                console.log(`--${dragao.ataques.chamas} Vida.`)
                personagem.vida[0] -= dragao.ataques.chamas
                console.log();

            }

            
            console.log('--------------');
            console.log();


    }

    
    if(dragao.vida <= 0){
        console.log();
        console.log('SUA VIDA: ', personagem.vida[0]);
        console.log('VIDA DO DRAGÃO: 0');
        console.log('Você venceu!!');
        console.log();

        console.log();
        console.log('PARABÉNS POR CONCLUIR TODAS AS FASES DO JOGO!!');
        console.log('Obrigado por jogar!');
        console.log();

    }else if(personagem.vida[0] <= 0){
        personagem.vida[0] = 0
        console.log();
        console.log('SUA VIDA: 0');
        console.log('VIDA DO DRAGÃO: ', dragao.vida);
        console.log('Você perdeu...');
        console.log();

    }


};


function faseCavaleiro(){
    
    console.log('O Cavaleiro está em uma taverna e aceitou seu convite para duelar.')
    console.log('Boa batalhar!')
    console.log();

    cavaleiro = {
        vida : 150,
        ataques : {
            golpeDeLanca : 35,
            bloqueio : 2
        }
    }

    let bloqueado = 0
  

    while(cavaleiro.vida > 0 && personagem.vida[0] > 0){
        console.log();
        console.log('SUA VIDA: ', personagem.vida[0]);
        console.log('VIDA DO CAVALEIRO: ', cavaleiro.vida);
        console.log();

        console.log();
        console.log('Seus ataques: ', personagem.ataques);
        console.log('*Digite exatamente o nome do golpe.');
        ataque = prompt('Esolha: ');
        console.log();

        let dano = personagem["ataques"][ataque][0];
        let tipo = personagem["ataques"][ataque][1];

            if(bloqueado > 0){
                console.log('Seu ataque foi bloqueado pelo escudo.');
                bloqueado--
                console.log();
            }else{
                if(tipo == 'fisico'){
                    console.log('Ataques fisicos não são muito eficazes...');
                    dano = Math.floor(dano * 0.8);
                    console.log(`++${dano} Dano.`);
                    cavaleiro.vida -= dano
                    console.log();
        
                }else{
                    console.log(`++${dano} Dano.`);
                    console.log();
                    cavaleiro.vida -= dano

                }
            }

            if(cavaleiro.vida <= 0){
                console.log('--------------');
                console.log();
                break
            }
            
            console.log();           
            console.log('-----');       
            console.log();

            golpeCav = Math.floor(Math.random() * (6));
        
            if(golpeCav == 1){
                console.log('O cavaleiro acionou seu escudo.');
                bloqueado += cavaleiro.ataques.bloqueio
                console.log();

            }else{
                console.log('O cavaleiro atacou com sua lança.');
                console.log(`--${cavaleiro.ataques.golpeDeLanca} Vida.`)
                personagem.vida[0] -= cavaleiro.ataques.golpeDeLanca
                console.log();

            }

            
            console.log('--------------');
            console.log();


    }

    
    if(cavaleiro.vida <= 0){
        personagem.moedas += 100
        console.log();
        console.log('SUA VIDA: ', personagem.vida[0]);
        console.log('VIDA DO CAVALEIRO: 0');
        console.log('Você venceu!!');
        console.log('++ 100 Moedas.');
        console.log();


    }else if(personagem.vida[0] <= 0){
        personagem.vida[0] = 0
        console.log();
        console.log('SUA VIDA: 0');
        console.log('VIDA DO CAVALEIRO: ', cavaleiro.vida);
        console.log('Você perdeu...');
        console.log();
    
    }


};


function faseBruxa(){
    
    console.log('Você invadiu a casa da Bruxa... A batalha está para começar.');
    console.log('Boa sorte!');
    console.log();
    
    bruxa = {
        vida : 100,
        ataques : {
            ataqueMagico : 20,
            envenenamento : [10, 2]
        }
    }

    envenenado = 0
  
    while(bruxa.vida > 0 && personagem.vida[0] > 0){
        console.log();
        console.log('SUA VIDA: ', personagem.vida[0]);
        console.log('VIDA DA BRUXA: ', bruxa.vida);
        console.log();

        console.log();
        console.log('Seus ataques: ', personagem.ataques);
        console.log('*Digite exatamente o nome do golpe.')
        ataque = prompt('Esolha: ');
        console.log();

        let dano = personagem["ataques"][ataque][0];
        let tipo = personagem["ataques"][ataque][1];

            if(tipo == 'magico'){
                console.log('Ataques mágicos não são muito eficazes...');
                dano = Math.floor(dano * 0.8);
                console.log(`++${dano} Dano.`);
                bruxa.vida -= dano
                console.log();
        
            }else{
            console.log(`++${dano} Dano.`);
            console.log();
            bruxa.vida -= dano

            }

            if(bruxa.vida <=0){
                console.log('--------------');
                console.log();
                break
            }

            console.log();
            console.log('-----');
            console.log();
   
            golpeBruxa = Math.floor(Math.random() * (5));
        
            if(golpeBruxa == 1){
                console.log('A bruxa jogou uma poção, você foi envenenado.');
                envenenado += bruxa.ataques.envenenamento[1]
                console.log();

            }else{
                console.log('A bruxa lançou um feitiço.');
                console.log(`--${bruxa.ataques.ataqueMagico} Vida.`)
                personagem.vida[0] -= bruxa.ataques.ataqueMagico
                console.log();

            }

            if(envenenado > 0){
                console.log('Você tomou dano do envenenamento.')
                console.log(`--${bruxa.ataques.envenenamento[0]} Vida.`)
                personagem.vida[0] -= bruxa.ataques.envenenamento[0]
                console.log();
            
            }
            
            console.log('--------------');
            console.log();

    }


    if(bruxa.vida <= 0){
        personagem.moedas += 80
        console.log();
        console.log(`SUA VIDA: ${personagem.vida[0]}`)
        console.log('VIDA DA BRUXA: 0');
        console.log('Você venceu!!');
        console.log('++ 80 Moedas.');
        console.log();

    }else if(personagem.vida[0] <= 0){
        personagem.vida[0] = 0
        console.log();
        console.log('SUA VIDA: 0');
        console.log(`VIDA DA BRUXA: ${bruxa.vida}`)
        console.log('Você perdeu...');
        console.log();

    }

};





var dias = 1


function histBruxa(){
    console.log(`Estamos no dia ${dias} e para sua primeira missão você precisa derrotar a Bruxa de MontReal, a responsável pelo sequestro de crianças da vila.`)
}

function histCavaleiro(){
    console.log(`Dia ${dias}, um Cavaleiro está sempre arrumando problemas pela vila, a rumores de que ele está no reino do norte, já sabe o que fazer...`)
}

function histDragao(){
    console.log(`Parabéns honoravel guerreiro, teve sucesso até agora. Hoje é dia ${dias} e para sua última missão deves caçar o Dragão Celestial, seu coviu fica nas cavernas Abissais.`)
}





function crianca(){
    
    if(arvid.apanhou == 0){
        console.log('Arvid andou arrumando problemas com os soldados do rei denovo, ele entra em confusões demais para uma criança de 10 anos.');
        console.log('Ajudar Arvid?');
        ajudar = prompt("'Sim' para ajudar. ").toLowerCase();
        console.log();

        if(ajudar == 'sim'){
            console.log('Você teve que enfrentar os soldados para proteger a criança.');
            console.log('Arvid agradeceu imensamente.');
            console.log();
            console.log('--10 Vida.');
            personagem.vida[0] -= 10
            arvid.salvo++
            console.log();

        }else{
            console.log('Preferiu manter sua integridade e não se envolver...');
            arvid.apanhou += 1
            console.log();
    
        }
    }

};





function apostas(){

    let novamente
    
    console.log();
    console.log('No caminho um bêbado te convidou para se aventurar em uma mesa de apostas.');
    console.log('Gostaria de tentar?');
    let jogar = prompt("'Sim' ou 'Não'. ").toLowerCase();
    console.log();

    if(jogar == 'sim'){
        console.log('Os bêbados estão apostando em um simples dado.');
        console.log('O jogo é simples. A cada rodada cada um aposta 3 moedas e escolhe um número (1 a 20), quem acertar o número sorteado leva todas as moedas.');
        console.log();
        do{
      
            console.log(`Você tem ${personagem.moedas} moedas para apostar.`)    
            console.log('Em qual número deseja jogar? ')   
            num = +prompt('1 a 20: ');
            console.log();
            personagem.moedas -= 3

            caiu = Math.floor(Math.random() * (20)) + 1


            console.log(`O dado de 20 faces foi lançado e caiu o número ${caiu}`)

            if(caiu == num){
                console.log('Seu número foi sorteado! Parabéns!')
                personagem.moedas += 60
                console.log(`Suas moedas: ${personagem.moedas}`)
                console.log();
            
            }else{
                console.log('Infelizmente você perdeu...')
                console.log();
            
            }

            console.log('Vai tentar mais uma vez? ')
            jogar = prompt("'Sim' ou 'Não'. ").toLowerCase();
            console.log();
    
    }while(jogar == 'sim')
    
    }else{
        console.log('O bebado te chamou de medroso... ');
        console.log();
    }


};


function loja(){
    itens = {
        
        armadura : {
            defesaSimples : [15, 'defesa', 20]
        },
        escudoGrande : {
            defesaCompleta : [60, 'defesa', 50]
        },
        machado : {
            corteProfundo : [45, 'fisico', 40], 
        },
        arcoEFlecha : {
            rajadaDeFlechas : [20, 'fisico', 10],
        },
        anelDeHeysel : { 
            ataqueMagico : [30, 'magico', 20],
        },
        clavaDeFogo : {
            ondaExplosiva : [25, 'fogo', 20]
        },
        marteloDePedra : {
            obelisco : [20, 'pedra', 15]
        },
        tridente : {
            bombaDeAgua : [35, 'agua', 35]
        },
        varinhaDeSabugueiro : {
            tempestadeDeFolhas : [40, 'planta', 30]
        },
        cajadoMitico : {
            ataqueDeRaios : [50, 'eletrico', 55]
        },
        pocao : { }
            
    }
      
    function tabela(produto, preço) {
        this.produto = produto;
        this.preço = preço;
     } 
     
     var poçao = new tabela("pocao", "5");
     var arm = new tabela("armadura", "20");
     var escGr = new tabela("escudoGrande", "50");
     var mach = new tabela("machado", "60");
     var arcFl = new tabela("arcoEFlecha", "10");
     var anelHey = new tabela("anelDeHeysel", "20");
     var claFog = new tabela("clavaDeFogo", "20");
     var martPed = new tabela("marteloDePedra", "25");
     var tri = new tabela("tridente", "40");
     var varSab = new tabela("varinhaDeSabugueiro", "40");
     var cajMit = new tabela("cajadoMitico", "60");
    
     produtos = [poçao, arm, escGr, mach, arcFl, anelHey, claFog, martPed, tri, varSab, cajMit ]
    
    console.log();
    console.log('Bem vindo a loja, eis uma lista de itens disponíveis para a compra: ');
       
    do{
        
        console.table(produtos);
        console.log(`Seu saldo: ${personagem.moedas} moedas.`)
        console.log();
        console.log('Digite o nome do item, exatamente como está escrito, para visualizar detalhes e compra-lo se quiser. ');
        console.log("Digite 'nenhum' para sair da loja.");
        var compra = prompt();
        console.log();
        
        if(compra == 'nenhum'){
            break
        }
        
        
        ataque = Object.keys(itens[compra]);
        detalhes = itens[compra][Object.keys(itens[compra])];
        
    
//      //      COMPRA DE POÇÃO     //      //
        
        if(compra == 'pocao'){
            console.log(`O item ${compra} cura 15 pontos da sua vida e custa 5 moedas.`);
            console.log(`Você tem ${personagem.pocoes} poção(ões).`);
            console.log();

            console.log('Tem certeza que deseja comprar? ');
            comprarPocao = prompt();
            console.log();

            if(comprarPocao == 'sim'){
                console.log('Quantidade desejada: ');
                let quant = +prompt();
                console.log();
                preco = quant * 5

                if(personagem.moedas < preco){
                    console.log('infelizmente você não tem moedas o suficiente... ');
                    console.log('Aperte *Enter pata voltar ');
                    prompt();
                    console.log();
                    var ficar = 'sim'
                    continue
                }

                personagem.pocoes += quant 
                personagem.moedas -= preco

                console.log(`Parabéns pela compra! Agora você tem ${personagem.pocoes} poção(ões).`);
                console.log(`Seu saldo: ${personagem.moedas} moedas.`)
                console.log();
                console.log("Deseja retornar a loja? ");
                console.log("'Sim' para retornar.");
                ficar = prompt();
                console.log();
                continue
            
            }else{
                var ficar = 'sim'
                continue
            }

        
        }
        
        
//      //      COMPRA DE DEFESA        //      //


        else if(detalhes[1] == 'defesa'){
            
            console.log(`O item ${compra} te consede a ${ataque}.`)
            console.log(`Esta nova defesa aumenta sua vida máxima ${detalhes[0]} pontos, e vai lhe custar ${detalhes[2]} moedas.`)
            console.log();
            
            comparacao = personagem.moedas < detalhes[2]

            if(comparacao){
                console.log('Você não tem dinheiro o suficiente para este item...')
                console.log('Aperte *Enter para voltar.')
                prompt()
                console.log();
                ficar = 'sim'
                continue

            }
        
            console.log('Tem certeza que deseja comprar? ') 
            gastar = prompt().toLowerCase();
            console.log();

            if(gastar == 'sim'){
                
                vidaAnt = personagem.vida.splice(1, 1)
                vidaNova = Number(itens[compra][Object.keys(itens[compra])][0]) + Number(vidaAnt)
                personagem.vida.push(vidaNova)
                
                console.log('Parabéns pela compra!')
                personagem.moedas -= detalhes[2]
                console.log(`Seu saldo: ${personagem.moedas} moedas.`);
                console.log();         
                console.log(`Nova vida: ${personagem.vida[1]}.`);
                console.log();
                
                console.log("Deseja retornar a loja? ");
                console.log("'Sim' para retornar.");
                ficar = prompt();
                continue
            
            }else{
                ficar = 'sim'
                continue
            }      
        }

//      //      compra de ataques       //      //

        console.log(`O item ${compra} te consede o ${ataque}.`);
        console.log(`Este novo ataque tem ${detalhes[0]} de dano, é do tipo ${detalhes[1]} e vai lhe custar ${detalhes[2]} moedas.`);
        console.log();
        
        comparacao = personagem.moedas < detalhes[2]

            if(comparacao){
                console.log('Você não tem dinheiro o suficiente para este item... ');
                console.log('Aperte *Enter para voltar.');
                prompt();
                ficar = 'sim'
                continue

            }
            console.log('Tem certeza que deseja comprar? ');
            gastar = prompt();
            console.log();
                
            if(gastar == 'sim'){
                personagem["ataques"][Object.keys(itens[compra])] = itens[compra][Object.keys(itens[compra])]
                console.log('Parabéns pela compra!')
                personagem.moedas -= detalhes[2]
                
                console.log(`Seu saldo: ${personagem.moedas} moedas.`);
                console.log();          
                console.log(`Nova lista de ataques:`)
                console.log(personagem.ataques)
                console.log();
                console.log("Deseja retornar a loja? ");
                console.log("'Sim' para retornar.");
                ficar = prompt();
  
            }else{
            ficar = 'sim'
            };
    
        
    }while(ficar == 'sim')


};



const historias = [histBruxa, histCavaleiro, histDragao]
const fases = [faseBruxa, faseCavaleiro, faseDragao]




//      //      CÓDIGO DA HISTÓRIA      //      //
console.log();
console.log('Pressione *Enter para jogar.');
prompt();
console.log();
console.log('Bem-vindo ao nosso vilarejo nobre guerreiro, obrigado por chegar tão rápido... te guiarei nessa missão para enfrentar nossos inimigos em comum.');
console.log('Como se chama? ');
prompt();
console.log('Infelizmente sou péssimo com nomes... Enfim. ');
console.log('Este é o centro da vila, a estaca 0 da sua jornada.')
console.log();

for(let i = 0; i < 3; i++){

    console.log();
    console.log(`DIA ${dias}`)
    console.log('Seu status: ');
    console.log(personagem);
    console.log();
    
    console.log();
    console.log('Vamos até a loja guerreiro, encontrar itens de seu interesse, eles podem te ajudar em suas aventuras. ')
    console.log();
    apostas();
    console.log();
    loja();
    console.log();
    pocao()
    console.log();
    crianca();
    console.log();
    historias[i]();
    console.log();

    console.log('Para iniciar sua aventura deseja viajar pelo mar, pela floresta ou pelas montanhas? ');
    console.log('Pelo mar levam 2 dias e custam 5 moedas.');
    console.log('Pela floresta levam 3 dias, custam 2 moedas e alguns pontos de vida.');
    console.log('Pelas montanhas levam 5 dias e não lhe custam nada.');
    console.log('Qual sua rota escolhida?');
    
    do{
        console.log("'Mar', 'Floresta', 'Montanha'")
        var viagem = prompt().toLowerCase();
        if(viagem == 'mar' && personagem.moedas < 5){
            console.log();
            console.log('Você não tem dinheiro para esta viagem... Escolha outra rota.');
            console.log();
        }else if(viagem == 'floresta' && personagem.moedas < 2){
            console.log();
            console.log('Você não tem dinheiro para esta viagem... escolha outra rota.');
        }else{
            break
        }

    }while(true);

    if(viagem == 'mar'){
        personagem.moedas -= 5
        dias += 2
        console.log();
        console.log('Pague 5 moedas para se juntar a tripulação do navio.');
        console.log(`Seu saldo: ${personagem.moedas} moedas.`);
        console.log();

        inimigo = Math.floor(Math.random() * (2));

        if(inimigo == 1){
            console.log();
            faseAgua();
            console.log();
        }else{
            console.log();
            faseEletrico();
            console.log();
        }
    
    }else if(viagem == 'floresta'){
        personagem.moedas -= 2
        dias += 3
        mosquitos = Math.floor(Math.random() * (10)) + 1;
        personagem.vida[0] -= mosquitos
        
        console.log();
        console.log('Pague 2 moedas pelo aluguel do cavalo.');
        console.log(`Seu saldo: ${personagem.moedas} moedas.`);
        console.log();
        console.log('Os insetos dessa floresta não perdoam.');
        console.log(`--${mosquitos} Vida.`);
        console.log();

        console.log();
        fasePlanta();
        console.log();

    }else if(viagem == 'montanha'){
        dias += 5
        console.log();
        console.log('É uma boa caminhada e uma ótima escalada até nosso destino...');
        console.log();

        inimigo = Math.floor(Math.random() * (2));

        if(inimigo == 1){
            console.log();
            faseFogo();
            console.log();
        }else{
            console.log();
            fasePedra();
            console.log();
        }
    }
    
    if(morte()){
        console.log();
        console.log('GAME OVER!!!');
        console.log();
        break
    }

    console.log();
    console.log('Chegamos!');
    console.log();
    console.log(`DIA ${dias}`)
    console.log();
    pocao();
    console.log();
    
    fases[i]();

    dias += 1

    if(morte()){
        console.log();
        console.log('GAME OVER!!!');
        console.log();
        break
    }

    console.log();
    console.log('*Enter para voltar a vila.')
    prompt();
    console.log();

}

console.log();
console.log('ATÉ A PRÓXIMA!');
console.log();
