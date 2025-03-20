"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Database, Key, Lock, RefreshCw, Server, FileText } from "lucide-react"

export default function IntroSlide() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-emerald-50 dark:from-background dark:to-emerald-950/20 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Logo and Title */}
      <div className="text-center mb-12 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <div className="h-20 w-20 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto">
            <Database className="h-10 w-10 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500"
        >
          Supabase
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto"
        >
          Открытая альтернатива Firebase
        </motion.p>
      </div>

      {/* Main Description */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 40, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center mb-12"
      >
        <p className="text-xl leading-relaxed">
          Supabase — открытая платформа, предоставляющая набор бэкенд-сервисов для разработки веб- и мобильных
          приложений. Построена на базе PostgreSQL и включает инструменты для работы с данными.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 30, opacity: isVisible ? 1 : 0 }}
            transition={{
              duration: 0.6,
              delay: 1 + index * 0.1,
              ease: "easeOut",
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg mr-4">
                <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mt-12 text-center"
      >
        {/* Removed marketing tagline */}
      </motion.div>
    </div>
  )
}

const features = [
  {
    title: "База данных PostgreSQL",
    description: "Основана на PostgreSQL как базе данных для хранения и обработки информации.",
    icon: Database,
  },
  {
    title: "Аутентификация",
    description: "Управление пользователями с безопасностью на уровне строк и различными методами входа.",
    icon: Key,
  },
  {
    title: "Realtime API",
    description: "Возможность подписки на изменения в базе данных и получения обновлений.",
    icon: RefreshCw,
  },
  {
    title: "Автоматические API",
    description: "Генерация RESTful и GraphQL API на основе схемы базы данных.",
    icon: Server,
  },
  {
    title: "Хранилище",
    description: "Функционал для хранения и обслуживания файлов с настройкой прав доступа.",
    icon: FileText,
  },
  {
    title: "Безопасность",
    description: "Механизмы безопасности на уровне строк и граничные функции.",
    icon: Lock,
  },
]

