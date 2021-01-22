// https://github.com/jewelxy/Assignment-JS-problem

//==========Problem No: 01============
function kilometerToMeter(kilometer){
    //calculate meter
    var meter= kilometer * 1000;
    if(meter<0){
        //Show Error message
        return "Distance can never be negative. So Distance must be return possitive value "+ meter*(-1);
    }else{
        return meter;
    }   
}


//==========Problem No: 02============
function  budgetCalculator(watch,mobile,leptop){
    //calculate budget
    var total = watch*50 + mobile*100 + leptop*500;

    //Meassage For if The number of products is negative
    if(watch<0){
        return "The number of products cannot be negative";
    }
    else if(mobile<0){
        return "The number of products cannot be negative";
    }
    else if(leptop<0){
        return "The number of products cannot be negative";
    }
    //Return The total cost
    else{
        return total;
    }
}
//==========Problem No: 03============
function hotelCost(totalDay){
    if(totalDay <= 0){
        //Show Error Message
        return "Days Never Negative or Zero";
    }
    //First Ten Days cost calculetion
    else if(totalDay<=10){
        return totalDay*100;
    }
    //Ten to Twenty Days cost Calculetion
    else if(totalDay<=20){
        var firstTenDays = 10 * 100;
        var onlyTen = totalDay - 10;
        var upTenToTwentyDays = onlyTen * 80;
        return firstTenDays + upTenToTwentyDays;
    }
    //More Than twenty days
    else{
        var firstTenDays = 10 * 100;
        var upTenToTwentyDays = 10 * 80;
        var upToTwenty = totalDay - 20;
        var moreThanTwenty = upToTwenty * 50;
        return firstTenDays + upTenToTwentyDays + moreThanTwenty;
    }
}


//==========Problem No: 04============
function megaFriend(arrFriendName) {
    if (arrFriendName.length > 0) {
      var longestName = " ";
      for (var i = 0; i < arrFriendName.length; i++) {
        if (longestName.length < arrFriendName[i].length) {
          longestName = arrFriendName[i];
        }
      }
      return longestName;
    } else {
        //Show Error Message
      return "You Inserted Empty Array";
    }
  }