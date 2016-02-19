(function(){

  angular.module('ionicApp').service('TagMenu', function(){

    var tagsData =[{ tagName : 'Мои объявления', tagLink : '#/main', item: 'item icon ion-ios-list-outline'},
      { tagName : 'Продажа', tagLink : '#/sale', item : 'item icon ion-cash'},
      { tagName : 'Покупка', tagLink : '#/buy', item : 'item icon ion-ios-cart-outline'},
      { tagName : 'Поиск', tagLink : '#/poisk', item : 'item icon ion-ios-search'}];

    this.getTags = function(){
      return tagsData;
    };
  });
})();
