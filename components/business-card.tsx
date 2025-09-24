"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Globe, MapPin, Copy, Check } from "lucide-react"

interface BusinessCardProps {
  name?: string
  title?: string
  company?: string
  email?: string
  phone?: string
  website?: string
  address?: string
}

export function BusinessCard({
  name = "Your Name",
  title = "Chief Executive Officer",
  company = "iHub Group",
  email = "contact@ihubgroup.com",
  phone = "+1 (555) 123-4567",
  website = "www.ihubgroup.com",
  address = "123 Innovation Drive, Tech City",
}: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="perspective-1000">
        <div
          className={`relative w-96 h-56 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground shadow-2xl border-0">
            <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 rounded-lg bg-white/10 rotate-12"></div>
              </div>

              {/* Company logo/name */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <h1 className="text-2xl font-bold text-balance">{company}</h1>
                </div>
                <p className="text-sm text-primary-foreground/80">Innovation • Technology • Growth</p>
              </div>

              {/* Name and title */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-1 text-balance">{name}</h2>
                <p className="text-sm text-primary-foreground/90 text-pretty">{title}</p>
              </div>

              {/* Click hint */}
              <div className="absolute bottom-2 right-2 text-xs text-primary-foreground/60">Click to flip</div>
            </div>
          </Card>

          {/* Back of card */}
          <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card shadow-2xl">
            <div className="p-6 h-full flex flex-col justify-center space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{company}</h3>
                <p className="text-sm text-muted-foreground">Contact Information</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{email}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(email, "email")
                    }}
                  >
                    {copiedField === "email" ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{phone}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(phone, "phone")
                    }}
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{website}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(website, "website")
                    }}
                  >
                    {copiedField === "website" ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground text-pretty">{address}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(address, "address")
                    }}
                  >
                    {copiedField === "address" ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground">Click to flip back</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
