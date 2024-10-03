export const Api = {
  baseUrl: 'https://backend-integrar-com-frontend-k2ao.onrender.com/',

  personagem: {
    endpoint: function () {
      return Api.baseUrl + 'personagem'
    },
    readAll: function () {
      return this.endpoint() + '/'
    }
  },
  
  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.error('Erro ao carssregar dados ' + url, error)
      toast.error('Erro ao carregar dados')
    })
  }


}