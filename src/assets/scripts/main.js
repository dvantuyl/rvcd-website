import 'focus-visible'
import 'alpinejs'
import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar')
  if (!calendarEl) {
    return
  }

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = yyyy + '-' + mm + '-' + dd

  var calendar = new Calendar(calendarEl, {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialDate: today,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: 'Conference',
        start: '2021-04-11',
        end: '2021-04-13',
      },
      {
        title: 'Meeting',
        start: '2021-04-12T10:30:00',
        end: '2021-04-12T12:30:00',
      },
      {
        title: 'RVCD Planning Meeting',
        url: '/posts/planning-meeting-20210608',
        start: '2021-06-08',
      },
    ],
  })

  calendar.render()
})
