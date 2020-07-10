const url = "https://random-word-api.herokuapp.com/word?number=200";
axios
  .get(url)
  .then((res) => {
    // console.log(res.data);
    const words = res.data;
    // const test = "apple";
    // console.log(test.length)
    //
    const five = words.filter(function (word) {
      return word.length; //글자수가 5개인것만
    });
    console.log(five);
  })
  .catch((err) => {
    console.log(err);
  });
