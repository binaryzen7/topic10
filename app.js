$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];
console.log(devices);

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post('http://localhost:3001/devices', body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

app.get('/register-device', (req, res) => {
  res.sendFile(`${base}/register-device.html`);
  });
  
app.get('/iot-applications', (req, res) => {
  res.sendFile(`${base}/iot-applications.html`);
  });

$.get('http://localhost:3001/devices')
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});
