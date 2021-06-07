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
        title: 'All Day Event',
        start: '2021-04-12',
      },
      {
        title: 'Long Event',
        start: '2021-04-07',
        end: '2021-04-10',
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2021-04-09T16:00:00',
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2021-04-16T16:00:00',
      },
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
        title: 'Lunch',
        start: '2021-04-12T12:00:00',
      },
      {
        title: 'Meeting',
        start: '2021-04-12T14:30:00',
      },
      {
        title: 'Happy Hour',
        start: '2021-04-12T17:30:00',
      },
      {
        title: 'Dinner',
        start: '2021-04-12T20:00:00',
      },
      {
        title: 'Birthday Party',
        start: '2021-04-13T07:00:00',
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-04-28',
      },
    ],
  })

  calendar.render()
})
