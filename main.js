if (typeof(Storage) !== 'undefined') {

    LocalStorage.setItem('Username', 'Passworld');
   
   } else {
   
    alert('LocalStorage không hỗ trợ trên trình duyệt này!!');
   
   }