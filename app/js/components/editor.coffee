define [
  'react','jquery', './viewer', 'shared/erk/common',
  'shared/erk/components/mixins/text'
], (
  React, $, viewerComponent, Common,
  textMixin
)->
  step = 0.002

  mapowanieKoordynat =
    x1: 'X1 - długość geograficzna zachód'
    x2: 'X2 - długość geograficzna wschód'
    x3: 'X3 - długość geograficzna znacznika'
    y1: 'Y1 - szerokość geograficzna południe'
    y2: 'Y2 - szerokość geograficzna północ'
    y3: 'Y3 - szerokość geograficzna znacznika'

  defaultCoordinates =
    x1: 0.0
    x2: 0.0
    x3: 0.0
    y1: 0.0
    y2: 0.0
    y3: 0.0

  React.createClass
    mixins: [textMixin]
    displayName: 'openStreetMapEditor'
    getDefaultProps: ->
      coordinates: defaultCoordinates
      size:
        width: 425
        height: 350
      address: ''

    getInitialState: ->
      address: @props.address
      coordinates: @props.coordinates
      searchResults: null
      viewCoordinates: @props.coordinates

      texts:
        brakWynikowWyszukiwania: "Brak wyników wyszukiwania"
        bladOdpowiedziNominatim: "Serwer Nominatim odpowiada niepoprawnie lub zbyt długo"
        wyczyscCoordynaty: "Wyczyść wszystkie koordynaty"
        szukaj: "Szukaj"

    getResultsByAddress: ->
      $.ajax
        url: 'https://nominatim.openstreetmap.org/search.php',
        dataType: 'json',
        data:
          q: @state.address,
          format: 'json',
        timeout: 5000,
        success: (data) =>
          if data.length
            @setState searchResults: data.map (obj)->
              displayName: obj.display_name
              coordinates:
                x1: obj.boundingbox[2],
                x2: obj.boundingbox[3],
                x3: obj.lon,
                y1: obj.boundingbox[0],
                y2: obj.boundingbox[1],
                y3: obj.lat
          else
            @setState searchResults: []
            alert @state.texts.brakWynikowWyszukiwania
        error: () =>
          @setState searchResults: []
          alert @state.texts.bladOdpowiedziNominatim

    updateViewCoords: ((newCoordinates)->
      @setState viewCoordinates: newCoordinates
    ).slowly(500)

    updateCoordinate: (name, value)->
      coordinates = @state.coordinates
      newCoordinates = Object.clone(coordinates)
      newCoordinates[name] = value
      @updateCoordinates(newCoordinates)

    updateCoordinates: (coordinates)->
      @setState coordinates: coordinates
      @updateViewCoords(coordinates)


    componentDidMount: ->
      @componentDidUpdate()

    componentDidUpdate: ->
      @props.onUpdate(@state.coordinates)

    render: ->
      {div, input, a, li, label, i, span} = React.DOM
      button = (attr, zawartosc)=>
        newAttr = Object.merge({
          href: "#!"
          className: 'btn btn-default'
        },attr)
        a newAttr, zawartosc

      div null,
        div className: 'well well-small',
          div className: "input-group",
            input {
              className: "form-control"
              value: @state.address
              onChange: (e) => @setState address: e.target.value
            },
            span className: "input-group-btn",
              button {
                ref: 'searchButton'
                className: "btn btn-default ladda-button"
                "data-style": "slide-right"
                onClick: =>
                  searchButton = $(@refs['searchButton'].getDOMNode())
                  @getResultsByAddress().always((=>
                    searchButton.data('ladda')?.stop()
                  ).slowly(200))
              },
                span className: "ladda-label",
                  @state.texts.szukaj
          div null,
            switch
              when @state.searchResults?.length, @state.searchResults is null
                div className: "list-group",
                  @state.searchResults?.map (result, index)=>
                    a {
                        key: index
                        className: "list-group-item",
                        href: "#!"
                        onClick: =>
                          @updateCoordinates(result.coordinates)
                      },
                      result.displayName
              when @state.searchResults
                div {
                  className: "alert alert-warning",
                  role: "alert"
                },
                  @state.texts.brakWynikowWyszukiwania
            div null,
              button {
                  onClick: =>
                    @updateCoordinates(defaultCoordinates)
                },
                @state.texts.wyczyscCoordynaty
            div className: "list-group",
              Object.keys(@state.coordinates).map (name)=>
                li {
                    className: "list-group-item"
                    key: name
                  },
                  label null,
                    mapowanieKoordynat[name],
                  div className: "input-group",
                    input {
                      className: "form-control"
                      value: @state.coordinates[name]
                      onChange: (e) =>
                        if e.target.value.match /^\d+(\.)?(\d+)?$/
                          @updateCoordinate(name, e.target.value)
                    },
                    span className: "input-group-btn",
                      button {
                          onClick: => @updateCoordinate(name, parseFloat(@state.coordinates[name]) - step)
                        },
                        (i className: "glyphicon glyphicon-minus"),
                      button {
                          onClick: => @updateCoordinate(name, parseFloat(@state.coordinates[name]) + step)
                        },
                        (i className: "glyphicon glyphicon-plus"),
        React.createElement(viewerComponent,
            coordinates: @state.viewCoordinates
            size: @props.size
        )