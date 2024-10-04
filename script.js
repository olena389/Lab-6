function getRandomUsers() {
    fetch('https://randomuser.me/api/?results=5') // Отримуємо 5 випадкових користувачів
        .then(response => response.json()) // Обробляємо відповідь у форматі JSON
        .then(data => {
            const users = data.results; // Отримуємо масив користувачів
            let usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = ''; // Очищаємо попередній вміст контейнера

            // Для кожного користувача створюємо HTML-картку
            users.forEach(user => {
                let userCard = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User picture"> <!-- Фото користувача -->
                        <h3>${user.name.first} ${user.name.last}</h3> <!-- Ім'я користувача -->
                        <p><span class="icon"><i class="fas fa-phone"></i></span><strong>Cell:</strong> ${user.cell}</p> <!-- Мобільний телефон -->
                        <p><span class="icon"><i class="fas fa-map-marker-alt"></i></span><strong>Country:</strong> ${user.location.country}</p> <!-- Країна -->
                        <p><span class="icon"><i class="fas fa-envelope"></i></span><strong>Email:</strong> ${user.email}</p> <!-- Електронна пошта -->
                        <p><span class="icon"><i class="fas fa-map"></i></span><strong>Coordinates:</strong> Lat: ${user.location.coordinates.latitude}, Lng: ${user.location.coordinates.longitude}</p> <!-- Координати -->
                    </div>
                `;
                usersContainer.innerHTML += userCard; // Додаємо картку до контейнера
            });
        })
        .catch(error => console.error('Error:', error)); // Обробляємо можливі помилки
}

// Викликаємо функцію при натисканні на кнопку
document.getElementById('load-users-button').addEventListener('click', getRandomUsers);
