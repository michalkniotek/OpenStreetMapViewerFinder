define ['jquery','sugar'], ($)->
###
  Tworzy funkcję która nie pozwoli uruchomić się częściej niż co {time} ms.
  Jeśli próby będą zbyt częste, tylko ostatnie wołanie zostanie wykonane

  przykład:
  slowFunc = ((a)-> console.log a).slowly(500)

  slowFunc(4)
  slowFunc(5)
  slowFunc(6)
  slowFunc(7)
  slowFunc(8)
  slowFunc(9)
  slowFunc(10)

  efekt: w konsoli zostanie wyświetlona wyłacznie liczba 10
###
Function.prototype.slowly = (time,maxStack)->
  original = this
  delayKeeper = null
  currentStack = 0
  ->
    callargs = arguments
    currentStack++
    if delayKeeper
        clearTimeout(delayKeeper)
    run = =>
      currentStack = 0
      delayKeeper = null
      original.apply(@,callargs)
    if not maxStack or currentStack < maxStack
      delayKeeper = setTimeout(run,time)
    else
      run()
