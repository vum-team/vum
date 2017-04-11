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

export default {
  inserted (el, binding) {
    const arg = binding.arg
    const v = binding.value

    let touching = false
    let startPoint, startTime, diff, movePoint

    const start = (e) => {
      touching = true
      const point = _point(e)
      startPoint = point
      startTime = +new Date()
      if (arg === 'start') v(startPoint)
      diff = {
        x: 0,
        y: 0
      }
    }

    const move = (e) => {
      if (!touching) return false
      e.preventDefault()
      const point = _point(e)
      movePoint = point
      diff = {
        x: point.x - startPoint.x,
        y: point.y - startPoint.y
      }
      if (arg === 'move') v(point, diff, +new Date() - startTime)
    }

    const end = (e) => {
      if (arg === 'end') v(movePoint, diff, +new Date() - startTime)
      touching = false
    }

    el.addEventListener('touchstart', start)
    el.addEventListener('touchmove', move)
    el.addEventListener('touchend', end)
    el.addEventListener('mousedown', start)
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseup', end)

    // for unbind
    if (arg === 'start') el._start = start
    if (arg === 'move') el._move = move
    if (arg === 'end') el._end = end
  },
  unbind (el, binding) {
    el.removeEventListener('touchstart', el._start)
    el.removeEventListener('touchmove', el._move)
    el.removeEventListener('touchend', el._end)
    el.removeEventListener('mousedown', el._start)
    el.removeEventListener('mousemove', el._move)
    el.removeEventListener('mouseup', el._end)
  }
}
