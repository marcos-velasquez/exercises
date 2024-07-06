import { Answer } from './models/Answer.ts';
import { Hat } from './models/Hat.ts';
import { Question } from './models/Question.ts';
import { House } from './models/types/House.ts';
import { QuestionView } from './views/QuestionView.ts';

(async () => {
    const question1 = new Question('Cómo te definirías?');
    question1.addAnswer(new Answer('Valiente', House.Gryffindor));
    question1.addAnswer(new Answer('Leal', House.Hufflepuff));
    question1.addAnswer(new Answer('Sabio', House.Ravenclaw));
    question1.addAnswer(new Answer('Ambicioso', House.Slytherin));

    const question2 = new Question('¿Cuál es tu clase favorita?');
    question2.addAnswer(new Answer('Vuelo', House.Gryffindor));
    question2.addAnswer(new Answer('Pociones', House.Ravenclaw));
    question2.addAnswer(new Answer('Defensa contra las artes oscuras', House.Slytherin));
    question2.addAnswer(new Answer('Animales fantásticos', House.Hufflepuff));

    const question3 = new Question('¿Cuál es tu color favorito?');
    question3.addAnswer(new Answer('Rojo', House.Gryffindor));
    question3.addAnswer(new Answer('Azul', House.Ravenclaw));
    question3.addAnswer(new Answer('Verde', House.Slytherin));
    question3.addAnswer(new Answer('Amarillo', House.Hufflepuff));

    const question4 = new Question('¿Cuál es tu mascota?');
    question4.addAnswer(new Answer('Sapo', House.Ravenclaw));
    question4.addAnswer(new Answer('Lechuza', House.Gryffindor));
    question4.addAnswer(new Answer('Gato', House.Hufflepuff));
    question4.addAnswer(new Answer('Serpiente', House.Slytherin));

    const question5 = new Question('¿Dónde pasarías más tiempo?');
    question5.addAnswer(new Answer('Invernadero', House.Hufflepuff));
    question5.addAnswer(new Answer('Biblioteca', House.Ravenclaw));
    question5.addAnswer(new Answer('En la sala común', House.Slytherin));
    question5.addAnswer(new Answer('Explorando', House.Gryffindor));

    const questions = [question1, question2, question3, question4, question5];

    await new QuestionView(questions).interact();

    const house = new Hat().select(questions);

    console.log(`Lo tengo claro, tu casa es ¡${house}! 💯`);
})();
