let ls = window.localStorage;

if(!ls.getItem('st')) ls.setItem('st', '0')
let st = ls.getItem('st') | 0

ls.setItem('st', String(st + 1))

if(st == 0) window.location.href = '/error'
if(st > 0) window.location.href = '/validate'