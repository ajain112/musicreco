import './App.css';
import hero from './hero.svg';

function Hero1(){
    return(
        <body>
        <div class="herotxt">
        <p class="headtxt">Find The Music That Match's Your</p>&nbsp;&nbsp;<p class="high">Vibe!!</p><br/>
        <p class="subhead">Unlock Your Perfect</p>&nbsp;<p class="subhigh">Soundtracks!!</p><br/>
        </div>
        <input placeholder="Share the name of the song closest to your heart" class="songinp"></input>    
        <br/>
        <button class="btn1">Get Vibin'</button>
        <button class="btn2">Suprise Me</button>
        <img src={hero} alt='hero' class="hero"/>
        </body>
    );
}

export default Hero1;