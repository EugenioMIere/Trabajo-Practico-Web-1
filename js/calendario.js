document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso 1',
                start: '2021-06-10',
                end:'2021-06-17'
            },
            {
                title: 'Curso 2',
                start: '2021-06-20',
                end: "2021-06-25"
            },
            {
                title: 'Curso 3',
                start: '2021-06-28',
                end: "2021-06-30"
            }
        ]
    }); 

    calendar.render();
  });