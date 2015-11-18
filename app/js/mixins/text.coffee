define [
], ()->

#  Przykład użycia mixinu w komponencie:
#
#  getInitialState: ->
#    texts:
#      kluczUzywanyLokalnie: "Klucz ze słownika"
#      brakWynikowWyszukiwania: "Brak wyników wyszukiwania"
#      bladOdpowiedziNominatim: "Serwer Nominatim odpowiada niepoprawnie lub zbyt długo"
#      wyczyscCoordynaty: "Wyczyść wszystkie koordynaty"
#      szukaj: "Szukaj"

  _textDefCache: {}

  componentWillMount: ->
    for kluczReact, kluczSlownika of @state.texts
      do (kluczReact, kluczSlownika)=>

        @_textDefCache[kluczReact] =
          if Object.isObject(kluczSlownika)
            {
              key: kluczSlownika.key
              options: kluczSlownika.options
            }
          else
            {
              key: kluczSlownika
              options: null
            }
        @updateText(kluczReact)

  updateText: (kluczReact, opcje = null) ->
    textCache = @_textDefCache[kluczReact]
    text(textCache.key, (tlumaczenie)=>
      texts = @state.texts
      texts[kluczReact] = tlumaczenie
      @setState texts: texts
    , opcje or textCache.options)