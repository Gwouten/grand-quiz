import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Result extends React.Component {
    render(){
        const bad = (
        <div>
            <h2 className="question__content header__text header__text--result">Ne nous voilons pas la face&thinsp;:<br/>ce n’est pas brillant.</h2>
                <p>Heureusement, vous n’êtes pas obligés de partager ce résultat. Et puis ce n’est pas grave, si vous arrivez à placer dans vos conversations les expressions “inbound“, “content marketing“, “storytelling“, “big data“ et “conversion“, vous ferez toujours bonne figure. Admettons aussi qu’y avait pas mal de questions faisant référence au passé, alors que vous, vous êtes une personne résolument tournée vers l’avenir! Et puis vous pouvez aussi rejouer&hellip;</p>
                <p> Cependant notre système d’intelligence artificielle basée sur les réseaux neuronaux vous recommande une collaboration avec une agence de qualité.</p>
                <p>Nos calculs quantico-heuristiques ont déterminé qu’en travaillant avec Concerto en 2018, votre score passerait forcément au-dessus de 15 l’année prochaine. A très bientôt&thinsp;?</p>
        </div>
        );

        const medium = (
        <div>
            <h2 className="question__content header__text header__text--result">C’est bien. Vous avez plus que la moitié&hellip;</h2>
                <p>A l’école, vous pourriez passer de classe. Vous n’êtes pas parmi les meilleurs, mais après tout ce n’est qu’un quizz, est-ce si important?</p>
                <p>Et bien, oui c’est important&thinsp;! Nous vous connaissons, vous n’êtes pas du genre à vous contenter du moyen, du passable. Car il n’y pas pire : ni le talent d’être d’être parmi les premiers, ni l’anticonformisme de mener les derniers.</p>
                <p>Point de fade, de tiède ou de mou, il vous faut de l’extrême, du panache!</p>
                <p>Vous avez en vous le sens de l’excellence, le refus de la médiocrité, le besoin de dépassement. Ça tombe bien, nous aussi&thinsp;!  Et si nous nous rencontrions en 2018&thinsp;?</p>
        </div>
        );

        const good = (
        <div>
            <h2 className="question__content header__text header__text--result">Les chiffres ne mentent pas : vous faites partie de l’élite.</h2>
                <p>La technologie et les arcanes du monde de la com n’ont plus de secret pour vous!</p>
                <p> Vos connaissances vous placent au-dessus de la mêlée. Et en plus, comme toute personne réellement cultivée, vous n’en faites pas étalage : jusqu’ici vous ne pensiez pas à partager votre résultat (mais maintenant qu’on vous le suggère, vous pourriez le faire).</p>
                <p>Mais attention, c’est parfois difficile d’être parmi les meilleurs. Vous avez sans doute déjà connu le syndrome du premier de classe : jalousie, incompréhension&hellip; Ne restez pas à vous apitoyer sur votre sort.</p>
                <p>Appelez-nous! Ensemble, on sera plus forts.</p>
        </div>
        );

        return (
        <div className={`wrapper ${this.props.score < 6 ? 'bad' : this.props.score < 11 ? 'medium' : 'good'}`}>
            <Header />
            <div className="score score--result">{this.props.score}/15</div>
            {this.props.score < 6 ? bad : this.props.score < 11 ? medium : good }
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    score: state.score
});

export default connect(mapStateToProps, null)(Result)