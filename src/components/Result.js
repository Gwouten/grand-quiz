import React from 'react';
import { connect } from 'react-redux';
import FacebookShare from './FacebookShare';
import Header from './Header';

class Result extends React.Component {
    render(){
        const badFr = (
        <div>
            <h2 className="question__content header__text header__text--result">Ne nous voilons pas la face&thinsp;:<br/>ce n’est pas brillant.</h2>
                <p>Heureusement, vous n’êtes pas obligés de partager ce résultat. Et puis ce n’est pas grave, si vous arrivez à placer dans vos conversations les expressions “inbound“, “content marketing“, “storytelling“, “big data“ et “conversion“, vous ferez toujours bonne figure. Admettons aussi qu’y avait pas mal de questions faisant référence au passé, alors que vous, vous êtes une personne résolument tournée vers l’avenir! Et puis vous pouvez aussi rejouer&hellip;</p>
                <p> Cependant notre système d’intelligence artificielle basée sur les réseaux neuronaux vous recommande une collaboration avec une agence de qualité.</p>
                <p>Nos calculs quantico-heuristiques ont déterminé qu’en travaillant avec Concerto en 2018, votre score passerait forcément au-dessus de 15 l’année prochaine. A très bientôt&thinsp;?</p>
        </div>
        );

        const mediumFr = (
        <div>
            <h2 className="question__content header__text header__text--result">C’est bien. Vous avez plus que la moitié&hellip;</h2>
                <p>A l’école, vous pourriez passer de classe. Vous n’êtes pas parmi les meilleurs, mais après tout ce n’est qu’un quizz, est-ce si important?</p>
                <p>Et bien, oui c’est important&thinsp;! Nous vous connaissons, vous n’êtes pas du genre à vous contenter du moyen, du passable. Car il n’y pas pire : ni le talent d’être d’être parmi les premiers, ni l’anticonformisme de mener les derniers.</p>
                <p>Point de fade, de tiède ou de mou, il vous faut de l’extrême, du panache!</p>
                <p>Vous avez en vous le sens de l’excellence, le refus de la médiocrité, le besoin de dépassement. Ça tombe bien, nous aussi&thinsp;!  Et si nous nous rencontrions en 2018&thinsp;?</p>
        </div>
        );

        const goodFr = (
        <div>
            <h2 className="question__content header__text header__text--result">Les chiffres ne mentent pas : vous faites partie de l’élite.</h2>
                <p>La technologie et les arcanes du monde de la com n’ont plus de secret pour vous!</p>
                <p> Vos connaissances vous placent au-dessus de la mêlée. Et en plus, comme toute personne réellement cultivée, vous n’en faites pas étalage : jusqu’ici vous ne pensiez pas à partager votre résultat (mais maintenant qu’on vous le suggère, vous pourriez le faire).</p>
                <p>Mais attention, c’est parfois difficile d’être parmi les meilleurs. Vous avez sans doute déjà connu le syndrome du premier de classe : jalousie, incompréhension&hellip; Ne restez pas à vous apitoyer sur votre sort.</p>
                <p>Appelez-nous! Ensemble, on sera plus forts.</p>
        </div>
        );
        const badNl = (
            <div>
                <h2 className="question__content header__text header__text--result">Laten we er geen doekjes om winden: het is niet briljant.</h2>
                    <p>Gelukkig bent u niet verplicht om dit resultaat te delen. En het is niet erg als u in uw gesprekken de woorden ‘inbound, ‘content marketing’, ‘storytelling’, ‘big data’ en ‘conversie’ gebruikt, u zult nog steeds een goed figuur slaan. Toegegeven, er waren ook heel wat vragen die over het verleden gingen, terwijl u iemand bent die resoluut naar de toekomst kijkt! U kunt ook altijd nog eens spelen&hellip;</p>
                    <p>Toch zal ons artificieel intelligentiesysteem gebaseerd op de neuronale netwerken u een samenwerking aanbevelen met een kwaliteitskantoor.</p>
                    <p>Onze quantico-heuristische berekeningen hebben bepaald dat door met Concerto te werken in 2018, uw score volgend jaar zeker meer zal bedragen dan 15. Tot binnenkort?</p>
            </div>
            );
    
            const mediumNl = (
            <div>
                <h2 className="question__content header__text header__text--result">Het is ok. U hebt meer dan de helft&hellip;</h2>
                    <p>Op school kunt u overgaan naar een volgende klas. U behoort niet bij de besten, maar al bij al is het maar een quiz hé, is dat zo belangrijk?</p>
                    <p>Wel ja, het is belangrijk! Wij kennen u, u bent niet iemand die tevreden is met matige resultaten. Want erger kan niet, niet het talent hebben om bij de eersten te behoren en niet anticonformistisch genoeg om de laatsten te leiden.</p>
                    <p>Met flauw, matig of slap bent u niets, u hebt iets extreems nodig, uitstraling!</p>
                    <p>U hebt zin voor uitmuntendheid, u weigert middelmatigheid, u wil overtreffen. Dat komt goed uit, wij ook! En als wij elkaar eens zouden ontmoeten in 2018?</p>
            </div>
            );
    
            const goodNl = (
            <div>
                <h2 className="question__content header__text header__text--result">Cijfers liegen niet: u behoort tot de elite.</h2>
                    <p>De technologie en de wereld van de communicatie hebben voor u geen geheimen meer!</p>
                    <p>Uw kennis plaatst u boven de massa. En zoals iedere gecultiveerde persoon etaleert u die kennis ook niet: tot nu toe dacht u er niet aan om uw resultaat te delen ( maar nu men u dit suggereert, kunt u dit ook doen).</p>
                    <p>Maar opgelet, het is soms niet gemakkelijk om bij de besten te behoren. U kunt wellicht het syndroom van de beste van de klas: jaloezie, onbegrip … Blijf niet bij de pakken zitten.</p>
                    <p>Bel ons, samen zijn we sterker.</p>
            </div>
            );
            const lang = this.props.lang === 'fr';

        return (
        <div className={`wrapper ${this.props.score < 6 ? 'bad' : this.props.score < 11 ? 'medium' : 'good'}`}>
            <Header />
            <div className="score score--result">{this.props.score}/15</div>
            {this.props.score < 6 ? (lang ? badFr : badNl) : (this.props.score < 11 ? (lang ? mediumFr : mediumNl) : (lang ? goodFr : goodNl)) }
            <FacebookShare />
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    score: state.score,
    lang: state.lang
});

export default connect(mapStateToProps, null)(Result)