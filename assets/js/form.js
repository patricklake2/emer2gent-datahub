---
---
  (function (root) {

    var keys = [
      {% for org in site.data.allDatasets %}{% for dataset in org[1].datasets %} "{{ dataset.id }}", {% endfor %}{% endfor %}
    ]
  if (typeof keys === "undefined") keys = ['Test'];
  else keys.push("Test");

  // Define the licence codes. See https://spdx.org/licenses/
  var licences = {
    {% for licence in site.data.licences %}"{{ licence[0] }}": "{{ licence[1] }}",{% endfor %}
  }

  var tz = { "A": 1, "ACDT": 10.5, "ACST": 9.5, "ADT": -3, "AEDT": 11, "AEST": 10, "AKDT": -8, "AKST": -9, "AST": -4, "AWST": 8, "B": 2, "BST": 1, "C": 3, "CDT": -5, "CEDT": 2, "CEST": 2, "CET": 1, "CST": -6, "CXT": 7, "D": 4, "E": 5, "EDT": -4, "EEDT": 3, "EEST": 3, "EET": 2, "EST": -5, "F": 6, "G": 7, "GMT": 0, "H": 8, "HAA": -3, "HAC": -5, "HADT": -9, "HAE": -4, "HAP": -7, "HAR": -6, "HAST": -10, "HAT": -2.5, "HAY": -8, "HNA": -4, "HNC": -6, "HNE": -5, "HNP": -8, "HNR": -7, "HNT": -3.5, "HNY": -9, "I": 9, "IST": 9, "IST": 1, "JST": 9, "K": 10, "L": 11, "M": 12, "MDT": -6, "MESZ": 2, "MEZ": 1, "MST": -7, "N": -1, "NDT": -2.5, "NFT": 11.5, "NST": -3.5, "O": -2, "P": -3, "PDT": -7, "PST": -8, "Q": -4, "R": -5, "S": -6, "T": -7, "U": -8, "UTC": 0, "UT": 0, "V": -9, "W": -10, "WEDT": 1, "WEST": 1, "WET": 0, "WST": 8, "X": -11, "Y": -12, "Z": 0 };


  // Enhance DOM elements
  var els = {};

  // Check if the ID has been used already
  els.id = document.getElementById('id');
  els.id.addEventListener('keyup', function (e) {
    e.currentTarget.setAttribute('class', '');
    msg = document.getElementById('id-warning');
    if (msg) e.currentTarget.parentNode.removeChild(msg);
    for (k = 0; k < keys.length; k++) {
      if (keys[k] == e.currentTarget.value) {
        e.currentTarget.setAttribute('class', "invalid");
        element = document.createElement('div');
        element.id = "id-warning";
        element.setAttribute('class', "error msg");
        element.innerHTML = "This ID already exists in the public index";
        e.currentTarget.insertAdjacentElement('afterend', element);
        continue;
      }
    }
  });


  // Add the list of licences and make the form elements interact
  els.licence = { 'main': document.getElementById('licence') };
  els.licence.spdx = document.createElement('select');
  els.licence.spdx.id = "licence-spdx";
  els.licence.main.insertAdjacentElement('beforebegin', els.licence.spdx);
  els.licence.label = document.createElement('label');
  els.licence.label.setAttribute('for', 'licence');
  els.licence.label.innerHTML = 'Custom string:';
  els.licence.main.insertAdjacentElement('beforebegin', els.licence.label);
  document.getElementById('label-licence').setAttribute('for', 'licence-spdx');
  var str = "<option value=\"\">Custom licence</option>";
  for (var l in licences) str += '<option value="' + l + '">' + licences[l] + '</option>';
  els.licence.spdx.innerHTML = str;
  els.licence.spdx.style.display = "inline-block";
  els.licence.spdx.addEventListener('change', function (e) {
    els.licence.main.style.display = (e.currentTarget.value) ? "none" : "inline-block";
    els.licence.label.style.display = (e.currentTarget.value) ? "none" : "inline-block";
    els.licence.main.value = e.currentTarget.value;
  });

  // Function to construct a datetime stamp builder from individual date and time fields (because datetime-local isn't well supported)
  // Need to add timezones to this
  function buildDateTime(name) {
    els[name] = { 'main': document.getElementById(name) };

    els[name].date = document.createElement('input');
    els[name].date.type = "date";
    els[name].date.id = name + '-date';
    els[name].date.setAttribute('class', 'datetime');
    els[name].main.insertAdjacentElement('afterend', els[name].date);

    l = document.createElement('label');
    l.innerHTML = "Date:";
    l.setAttribute('for', name + "-date");
    l.setAttribute('class', 'sub');
    els[name].date.insertAdjacentElement('beforebegin', l);

    els[name].time = document.createElement('input');
    els[name].time.type = "time";
    els[name].time.id = name + '-time';
    els[name].time.setAttribute('class', 'datetime');
    els[name].date.insertAdjacentElement('afterend', els[name].time);

    l = document.createElement('label');
    l.innerHTML = "Time:";
    l.setAttribute('for', name + "-time");
    l.setAttribute('class', 'sub');
    els[name].time.insertAdjacentElement('beforebegin', l);

    // Build a timezone select box
    var str, t, dt, h, m;
    str = '';
    for (t in tz) {
      // Calculate timezone offset
      toff = tz[t];
      h = Math.floor(Math.abs(toff));
      m = Math.round((Math.abs(toff) - h) * 60);
      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      dt = (toff < 0 ? '-' : '+') + h + ":" + m;
      str += '<option value="' + dt + '"' + (t == "UTC" ? ' selected="selected"' : '') + '>' + t + ' (' + dt + ')</option>';
    }
    if (str) {
      t = document.createElement('select');
      t.innerHTML = str;
      t.setAttribute('class', 'tz');
      t.id = name + '-tz';
      els[name].tz = t;
      els[name].time.insertAdjacentElement('afterend', els[name].tz);

      l = document.createElement('label');
      l.innerHTML = "TZ:";
      l.setAttribute('for', name + "-tz");
      l.setAttribute('class', 'sub');
      els[name].tz.insertAdjacentElement('beforebegin', l);

    }

    els[name].main.style.display = "none";
    els[name].date.style.display = "inline-block";
    els[name].time.style.display = "inline-block";

    function updateTime(el) {
      var dt = el.date.value;
      if (el.time.value) {
        dt = dt + 'T' + el.time.value + el.tz.value;
      }
      el.main.value = dt;
    }
    els[name].date.addEventListener('change', function (e) { updateTime(els[name]); });
    els[name].time.addEventListener('change', function (e) { updateTime(els[name]); });
    els[name].tz.addEventListener('change', function (e) { updateTime(els[name]); });
  }

  buildDateTime('createdAt');
  buildDateTime('updatedAt');

  // Add a close button to an element. We send the DOM element and the type (for the label)
  function addCloseButtonTo(el, type) {
    var btn = document.createElement('button');
    el.appendChild(btn);
    btn.innerHTML = "&times;";
    btn.class = "remove";
    btn.title = "Remove this " + type;
    btn.data = type;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var ul, li, i, inp;
      ul = e.currentTarget.parentNode.parentNode;
      li = ul.querySelectorAll('li');
      if (li.length > 1) ul.removeChild(e.currentTarget.parentNode);
      else {
        clearInputs(li[0]);
        li[0].style.display = "none";
      }
    });
    return;
  }

  // Initiate a list 
  function buildList(name) {
    var add = name + '-' + add;
    els[name] = document.getElementById(name);
    // Create "+ Add" button
    els[add] = document.createElement('button');
    els[add].title = "Add item";
    els[add].innerHTML = "&plus; Add " + name;
    els[add].type = "button";
    els[add].class = "button";
    // Attach event to button
    els[add].addEventListener('click', function (e) { newListItem(els[name]); });
    // Add button to DOM
    els[name].insertAdjacentElement('afterend', els[add]);
    var li = els[name].querySelectorAll('li');
    // Add a close button to the existing template
    addCloseButtonTo(li[0], name);
    li[0].style.display = "none";
    return;
  }
  // Update the IDs for numbered form elements
  function updateIDs(el, n) {
    var labels, i, inputs, textareas;
    labels = el.querySelectorAll('label');
    inputs = el.querySelectorAll('input, textareas, select');
    textareas = el.querySelectorAll('textarea');
    console.log('updating labels ' + n)
    for (i = 0; i < labels.length; i++) {
      labels[i].setAttribute('for', labels[i].getAttribute('for').replace('-0', '-' + n));
    }
    for (i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute('id', inputs[i].getAttribute('id').replace('-0', '-' + n))
      inputs[i].setAttribute('name', inputs[i].getAttribute('id').replace('-0', '-' + n))
    };
    return;
  }
  // Create a new list item
  function newListItem(res) {
    var li = res.querySelectorAll('li');
    if (li.length > 0) {
      if (li[0].style.display != "none") {
        l = li[0].cloneNode(true);
        btn = l.querySelector('button');
        typ = btn.getAttribute('data');
        l.removeChild(btn);
        l = clearInputs(l);
        res.appendChild(l);
        updateIDs(l, li.length);
        addCloseButtonTo(l, typ);
      } else {
        li[0].style.display = "";
      }
    }
  }
  // Clear the inputs for a list item
  function clearInputs(el) {
    // Clear the values as this is the default entry
    inp = el.querySelectorAll('input, textarea');
    for (i = 0; i < inp.length; i++) inp[i].value = "";
    return el;
  }

  buildList('resources');
  buildList('references');

  // Remove non-Javascript parts
  nojs = document.getElementsByClassName('no-js');
  for (var i = 0; i < nojs.length; i++) nojs[i].style.display = "none";

 }) (window || this);
