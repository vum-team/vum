const _point = (e) => {
  if (e.touches) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }
  } else {
    return {
      x: e.pageX,
      y: e.pageY
    }
  }
}

const start = (e, el) => {
  el.touching = true
  const point = _point(e)
  el._startPoint = point
  el._startTime = +new Date()
  if (el.swipeStart) el.swipeStart(el._startPoint)
  el._diff = {
    x: 0,
    y: 0
  }
}

const move = (e, el) => {
  if (!el.touching) return false
  e.preventDefault()
  const point = _point(e)
  el._movePoint = point
  el._diff = {
    x: point.x - el._startPoint.x,
    y: point.y - el._startPoint.y
  }
  if (el.swipeMove) el.swipeMove(point, el._diff, +new Date() - el._startTime)
}

const end = (e, el) => {
  if (el.swipeEnd) el.swipeEnd(el._movePoint, el._diff, +new Date() - el._startTime)
  el.touching = false
}

export default {
  inserted (el, binding) {
    el._start = (e) => start(e, el)
    el._move = (e) => move(e, el)
    el._end = (e) => end(e, el)

    const arg = binding.arg
    const v = binding.value

    if (arg === 'start') el.swipeStart = v
    if (arg === 'move') el.swipeMove = v
    if (arg === 'end') el.swipeEnd = v

    el.addEventListener('touchstart', el._start)
    el.addEventListener('touchmove', el._move)
    el.addEventListener('touchend', el._end)
    el.addEventListener('mousedown', el._start)
    el.addEventListener('mousemove', el._move)
    el.addEventListener('mouseup', el._end)
  },
  unbind (el) {
    el.removeEventListener('touchstart', el._start)
    el.removeEventListener('touchmove', el._move)
    el.removeEventListener('touchend', el._end)
    el.removeEventListener('mousedown', el._start)
    el.removeEventListener('mousemove', el._move)
    el.removeEventListener('mouseup', el._end)
  }
}
