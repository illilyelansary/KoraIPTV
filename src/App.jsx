import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Check, Play, Shield, Zap, Globe, Star, Users, TrendingUp, Wifi, Monitor } from 'lucide-react'
import './App.css'

// Import des images
import heroImage from './assets/RhT5Esg37oHl.png'
import africaImage from './assets/L1MOrEHkde5p.jpg'
import streamingImage from './assets/9zDuNPqcOsC6.png'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('yearly')

  const buildMailto = useCallback((plan) => {
    const to = 'support@koraiptv.com'
    const subject = encodeURIComponent(`Achat abonnement ${plan.name} – ${plan.priceEUR}€ / ${plan.priceFCFA} FCFA`)
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite acheter la formule ${plan.name} au prix de ${plan.priceEUR}€ / ${plan.priceFCFA} FCFA (${plan.duration}).\n\nMerci de m'indiquer la marche à suivre pour finaliser l'achat.\n\nCordialement,`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [])

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      priceEUR: '9.99',
      priceFCFA: '6,500',
      duration: '1 mois',
      features: [
        'Plus de 5,000 chaînes HD',
        'Serveurs anti-freeze',
        'Support 24/7',
        'VOD inclus'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      priceEUR: '19.99',
      priceFCFA: '13,000',
      duration: '3 mois',
      features: [
        'Plus de 15,000 chaînes 4K/HD',
        'Serveurs anti-freeze premium',
        'Support prioritaire 24/7',
        'VOD & séries illimitées',
        'Chaînes africaines exclusives'
      ],
      popular: false
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      priceEUR: '34.99',
      priceFCFA: '23,000',
      duration: '6 mois',
      features: [
        'Plus de 25,000 chaînes 4K/HD',
        'Serveurs anti-freeze ultra',
        'Support VIP 24/7',
        'Contenu premium exclusif',
        'Chaînes africaines & internationales',
        'Enregistrement cloud'
      ],
      popular: false
    },
    {
      id: 'yearly',
      name: 'Annuel',
      priceEUR: '59.99',
      priceFCFA: '39,000',
      duration: '12 mois',
      features: [
        'Accès complet 4K/HD pendant 12 mois',
        'Serveurs anti-freeze ultra',
        'Support prioritaire 24/7',
        'VOD & séries illimitées',
        'Chaînes africaines & internationales',
        'Mises à jour & priorités exclusives'
      ],
      popular: true
    }
  ]

  const stats = [
    { icon: Users, value: '500K+', label: 'Clients satisfaits' },
    { icon: Globe, value: '25K+', label: 'Chaînes disponibles' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime garanti' },
    { icon: Star, value: '4.9/5', label: 'Note client' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Serveurs Anti-Freeze',
      description: 'Technologie avancée garantissant un streaming sans interruption, même aux heures de pointe.'
    },
    {
      icon: Zap,
      title: 'Streaming Ultra-Rapide',
      description: 'Diffusion en 4K/HD avec une latence minimale grâce à nos serveurs optimisés.'
    },
    {
      icon: Globe,
      title: 'Service Mondial avec Focus Africain',
      description: 'Accès exclusif aux meilleures chaînes africaines et internationales, avec une infrastructure mondiale optimisée.'
    },
    {
      icon: Monitor,
      title: 'Multi-Plateforme',
      description: 'Compatible avec tous vos appareils : Smart TV, smartphone, tablette, ordinateur.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">KORAIPTV</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" onClick={(e)=>handleNavClick(e,'accueil')} className="text-white hover:text-purple-300 transition-colors">Accueil</a>
            <a href="#services" onClick={(e)=>handleNavClick(e,'services')} className="text-white hover:text-purple-300 transition-colors">Services</a>
            <a href="#tarifs" onClick={(e)=>handleNavClick(e,'tarifs')} className="text-white hover:text-purple-300 transition-colors">Tarifs</a>
            <a href="#contact" onClick={(e)=>handleNavClick(e,'contact')} className="text-white hover:text-purple-300 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" onClick={(e)=>handleNavClick(e,'tarifs')}>
            S'abonner
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">🌍 Service Mondial, Focus Afrique</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              L'IPTV Premium
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{' '}pour le Monde et l'Afrique</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez la révolution du streaming avec KORAIPTV. Plus de 25,000 chaînes en 4K/HD, serveurs anti-freeze ultra-performants et contenu africain au cœur d'un service mondial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4" onClick={(e)=>handleNavClick(e,'tarifs')}>
                Commencer maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4" onClick={(e)=>handleNavClick(e,'services')}>
                Voir la démo
              </Button>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl"></div>
            <img src={heroImage} alt="IPTV Streaming Interface" className="relative rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">🛡️ Technologie Avancée</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Pourquoi choisir KORAIPTV ?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Infrastructure mondiale optimisée, avec une attention particulière aux réseaux africains pour une expérience fluide partout.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">💰 Tarifs Compétitifs</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Choisissez Votre Abonnement</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Des prix adaptés avec paiement en FCFA et EUR. Tous nos plans incluent nos serveurs anti-freeze premium.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">Plus Populaire</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-white">{plan.priceEUR}€ / {plan.priceFCFA} FCFA</div>
                    <div className="text-gray-400">{plan.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    onClick={() => {
                      setSelectedPlan(plan.id)
                      window.location.href = buildMailto(plan)
                    }}
                  >
                    Choisir ce plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/40 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">KORAIPTV</span>
              </div>
              <p className="text-gray-400 mb-4">Le service IPTV premium de référence. Streaming mondial de qualité, serveurs anti-freeze et support 24/7.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" onClick={(e)=>handleNavClick(e,'services')} className="hover:text-white">IPTV Premium</a></li>
                <li><a href="#services" onClick={(e)=>handleNavClick(e,'services')} className="hover:text-white">Chaînes 4K/HD</a></li>
                <li><a href="#tarifs" onClick={(e)=>handleNavClick(e,'tarifs')} className="hover:text-white">VOD & Séries</a></li>
                <li><a href="#services" onClick={(e)=>handleNavClick(e,'services')} className="hover:text-white">Support Multi-appareils</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white underline" href="https://t.me/KoraIPTV" target="_blank" rel="noopener noreferrer">Rejoindre la chaîne Telegram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a className="hover:text-white underline" href="mailto:support@koraiptv.com?subject=Contact%20KORAIPTV&body=Bonjour%2C%20j'%C3%A9cris%20concernant%20vos%20abonnements.%20Merci%20!">Email: support@koraiptv.com</a>
                </li>
                <li>
                  <a className="hover:text-white underline" href="https://t.me/KoraIPTV" target="_blank" rel="noopener noreferrer">Telegram: @KoraIPTV</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KORAIPTV. Tous droits réservés. Service IPTV premium mondial avec focus Afrique.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
