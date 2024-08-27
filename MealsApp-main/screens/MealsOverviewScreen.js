import MealList from "../components/MealList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useLayoutEffect} from 'react';


const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />
};

export default MealsOverviewScreen;

