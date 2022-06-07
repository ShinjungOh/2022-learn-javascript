function getKrFood(food) {
    if (['불고기', '떡볶이', '비빔밥'].includes(food)) {
        return true;
    } else {
        return false;
    }
}

const food1 = getKrFood('불고기');
console.log(food1);

const food2 = getKrFood('파스타');
console.log(food2);


// 괄호 표기법
const meal = {
    한식: '비빔밥',
    양식: '파스타',
    일식: '초밥',
    중식: '마라샹궈',
}

const getMeal = (mealType) => {
    return meal[mealType] || '굶기';
}

console.log(getMeal('중식'));
console.log(getMeal());
