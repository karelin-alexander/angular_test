(function(){

  angular.module('ionicApp').service('TagMenu', function(){

    var tagsData =[{ tagName : 'Мои объявления', tagLink : '#/main', item: 'item icon ion-ios-list-outline'},
<<<<<<< HEAD
      { tagName : 'Продажа', tagLink : '', item : 'item icon ion-cash'},
      { tagName : 'Покупка', tagLink : '', item : 'item icon ion-ios-cart-outline'},
      { tagName : 'Поиск', tagLink : '#/poisk', item : 'item icon ion-ios-search'}];
=======
      { tagName : 'Продажа', tagLink : '#/sale', item : 'item icon ion-cash'},
      { tagName : 'Покупка', tagLink : '#/buy', item : 'item icon ion-ios-cart-outline'},
      { tagName : 'Поиск', tagLink : '#/search', item : 'item icon ion-ios-search'}];
>>>>>>> refs/remotes/origin/ionic_step2

    this.getTags = function(){
      return tagsData;
    };
  });
})();
