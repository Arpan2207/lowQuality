function fetchPhotos() {
    fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var photoContainer = document.getElementById('photo-container');
        var photoCount = data.length;
  
        data.forEach(function(photo) {
          var photoDiv = document.createElement('div');
          photoDiv.className = 'photo-container';
  
          var img = document.createElement('img');
          img.src = photo.thumbnailUrl;
  
          var title = document.createElement('p');
          title.textContent = photo.title;
  
          photoDiv.appendChild(img);
          photoDiv.appendChild(title);
          photoContainer.appendChild(photoDiv);
  
          photoDiv.addEventListener('click', function() {
            photoDiv.style.opacity = 0;
            setTimeout(function() {
              photoDiv.remove();
              photoCount--;
              document.getElementById('photo-count').textContent = 'Number of photos: ' + photoCount;
            }, 500);
          });
        });
  
        var photoCountDisplay = document.createElement('p');
        photoCountDisplay.id = 'photo-count';
        photoCountDisplay.textContent = 'Number of photos: ' + photoCount;
        photoContainer.insertAdjacentElement('afterend', photoCountDisplay);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchPhotos);
  