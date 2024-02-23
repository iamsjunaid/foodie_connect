import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '../../../../lib/meals';

const MealsDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${'EMAIL'}`}>CREATOR</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: '...' }}
        ></p>
      </main>
    </>
  );
};

export default MealsDetailsPage;
