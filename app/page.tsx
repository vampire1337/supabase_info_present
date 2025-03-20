"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Layers, Lock, RefreshCw, Server, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IntroSlide from "../intro-slide"

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col">
      {/* Header */}
      <header className="border-b py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Supabase Presentation</h1>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">
            Слайд {currentSlide + 1} из {totalSlides}
          </span>
        </div>
      </header>

      {/* Slides */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl"
          >
            {currentSlide === 0 && <IntroSlide />}
            {currentSlide === 1 && <FeaturesSlide />}
            {currentSlide === 2 && <UseCasesSlide />}
            {currentSlide === 3 && <ConsiderationsSlide />}
            {currentSlide === 4 && <ConclusionSlide />}
          </motion.div>
        </AnimatePresence>

        {/* Improved Navigation Buttons */}
        <div className="absolute left-0 right-0 bottom-1/2 flex justify-between px-4 pointer-events-none">
          <Button
            variant="secondary"
            size="lg"
            className={`rounded-full shadow-lg flex items-center justify-center p-3 transition-all duration-200 ${currentSlide === 0 ? "opacity-0" : "opacity-100"} pointer-events-auto`}
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Предыдущий слайд</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className={`rounded-full shadow-lg flex items-center justify-center p-3 transition-all duration-200 ${currentSlide === totalSlides - 1 ? "opacity-0" : "opacity-100"} pointer-events-auto`}
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            <ArrowRight className="h-6 w-6" />
            <span className="sr-only">Следующий слайд</span>
          </Button>
        </div>
      </div>

      {/* Footer with GitHub Link */}
      <footer className="border-t py-3 px-6 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Supabase — открытая платформа для разработки веб- и мобильных приложений
        </span>
        <a
          href="https://github.com/vampire1337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          github.com/vampire1337
        </a>
      </footer>
    </div>
  )
}

function FeaturesSlide() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Ключевые особенности и удобство</h2>
        <p className="text-muted-foreground">Что делает Supabase удобным инструментом для разработки</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Server className="h-5 w-5 mr-2 text-primary" />
                Простота использования
              </h3>
              <p className="text-muted-foreground">
                Интуитивный интерфейс и автоматически генерируемые RESTful и GraphQL API на основе структуры базы
                данных. Минимальная ручная настройка и быстрый старт проектов.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-primary" />
                Масштабируемость
              </h3>
              <p className="text-muted-foreground">
                Благодаря PostgreSQL и интеграции с Amazon S3, Supabase справляется с ростом нагрузки без необходимости
                перестраивать архитектуру приложения.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-primary" />
                Интеграция сервисов
              </h3>
              <p className="text-muted-foreground">
                Аутентификация (включая OAuth и беспарольные методы), хранение файлов и реалтайм-обновления встроены в
                платформу и работают из коробки.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Безопасность
              </h3>
              <p className="text-muted-foreground">
                Поддержка row-level security, SSL и управление доступом на уровне ролей упрощают защиту данных и
                обеспечивают высокий уровень безопасности.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function UseCasesSlide() {
  const [activeTab, setActiveTab] = useState("realtime")

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Возможные применения</h2>
        <p className="text-muted-foreground">Supabase универсален и подходит для разных типов проектов</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="realtime">Realtime-данные</TabsTrigger>
          <TabsTrigger value="auth">Аутентификация</TabsTrigger>
          <TabsTrigger value="ai">AI и ML</TabsTrigger>
          <TabsTrigger value="data">Управление данными</TabsTrigger>
        </TabsList>

        <div className="relative h-[300px] overflow-hidden rounded-lg border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6"
            >
              <TabsContent value="realtime" className="h-full m-0">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3">Приложения с realtime-данными</h3>
                  <p className="text-muted-foreground mb-4">
                    Supabase идеально подходит для создания приложений, требующих мгновенной синхронизации данных между
                    пользователями.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Чаты</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Дашборды</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Совместная работа</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="auth" className="h-full m-0">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3">Проекты с аутентификацией</h3>
                  <p className="text-muted-foreground mb-4">
                    Сервис поддерживает сложные сценарии входа — от социальных логинов до кастомных токенов, что делает
                    его подходящим для SaaS или платформ с пользователями.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">OAuth</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Magic Links</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">JWT</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="h-full m-0">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3">AI и машинное обучение</h3>
                  <p className="text-muted-foreground mb-4">
                    Поддержка векторных вложений (через расширения PostgreSQL, такие как pgvector) открывает возможности
                    для приложений, работающих с семантическим поиском или рекомендациями.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Векторный поиск</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Рекомендации</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Эмбеддинги</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="data" className="h-full m-0">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3">Управление данными</h3>
                  <p className="text-muted-foreground mb-4">
                    От простых CRUD-приложений до сложных систем с сотнями таблиц — PostgreSQL как основа обеспечивает
                    гибкость и производительность.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">CRUD</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Сложные запросы</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">Миграции</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  )
}

function ConsiderationsSlide() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">На что обратить внимание</h2>
        <p className="text-muted-foreground">Важные аспекты при выборе Supabase для вашего проекта</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 rounded-lg p-6 border border-primary/10"
      >
        <p className="text-lg">
          Supabase хорошо справляется с типовыми задачами, но стоит учитывать специфику проекта. Если требуется глубокая
          кастомизация серверной логики или сложные вычисления на стороне бэкенда, может потребоваться дополнить его
          другими инструментами или рассмотреть более традиционный подход.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3">Подходит для</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Быстрый старт проектов
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Типовые задачи аутентификации и хранения
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Realtime-приложения
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Проекты с ограниченными ресурсами разработки
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3">Ограничения</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-destructive mr-2">⚠</span>
                  Сложная кастомная серверная логика
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">⚠</span>
                  Высоконагруженные вычисления на бэкенде
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">⚠</span>
                  Проекты с очень специфичными требованиями
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">⚠</span>
                  Системы с нестандартной архитектурой данных
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function ConclusionSlide() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Заключение</h2>
        {/* Удален подзаголовок "Supabase — инструмент для современной разработки" */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/10 text-center"
      >
        <p className="text-xl leading-relaxed">
          Supabase предоставляет набор инструментов для разработки приложений, сочетая возможности PostgreSQL с
          дополнительными сервисами для аутентификации, хранения и обработки данных.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col items-center gap-4 mt-8"
      >
        <p className="text-muted-foreground text-center max-w-2xl">
          Официальная документация (доступная на supabase.com/docs) содержит примеры интеграции и настройки для
          различных сценариев использования.
        </p>
      </motion.div>
    </div>
  )
}

