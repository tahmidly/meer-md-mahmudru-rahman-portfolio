import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Award, BookOpen, FileText } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-r from-green-50 to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
              <img
                src="https://i.postimg.cc/jq90gdpW/pic.png"
                alt="প্রভাষক মীর মাহমুদুর রহমান চুন্নু"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">প্রভাষক মীর মাহমুদুর রহমান চুন্নু</h1>
              <p className="text-xl text-green-700 font-medium mb-4">Lecturer Meer Mahmudur Rahman Chunnu</p>
                <div className="space-x-3 space-y-3">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                সেক্রেটারি | ইসলামি আন্দোলন বাংলাদেশ বগুড়া জেলা শাখা, বগুড়া
                </div>
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                সহ-সভাপতি | ইসলামি আন্দোলন বাংলাদেশ শেরপুর উপজেলা শাখা, বগুড়া
                </div>
                </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Mail className="h-4 w-4 mr-2" />
                  যোগাযোগ করুন
                </Button>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  <FileText className="h-4 w-4 mr-2" />
                  জীবনবৃত্তান্ত
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="about">পরিচিতি</TabsTrigger>
              <TabsTrigger value="work">কর্মজীবন</TabsTrigger>
              <TabsTrigger value="contact">যোগাযোগ</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-green-700">আমার সম্পর্কে</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      আমি প্রভাষক মীর মাহমুদুর রহমান চুন্নু, একজন নিবেদিতপ্রাণ শিক্ষাবিদ এবং জনপ্রতিনিধি। দীর্ঘ ২৫ বছরের শিক্ষকতা জীবনে
                      আমি হাজারো শিক্ষার্থীর জীবনে আলো জ্বালিয়েছি। শিক্ষা ক্ষেত্রে অবদানের পাশাপাশি সমাজসেবা ও রাজনীতিতে আমার সক্রিয় অংশগ্রহণ
                      রয়েছে।
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      জনগণের সেবায় নিয়োজিত থেকে আমি সর্বদা চেষ্টা করি দেশ ও জাতির কল্যাণে কাজ করতে। শিক্ষা, স্বাস্থ্য, এবং সামাজিক উন্নয়নে
                      আমার বিশেষ আগ্রহ রয়েছে। আমার লক্ষ্য হল সমাজের সকল শ্রেণীর মানুষের জীবনমান উন্নয়ন করা এবং একটি সুন্দর ও সমৃদ্ধ
                      বাংলাদেশ গড়ে তোলা।
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-green-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">২৫+</div>
                    <p className="text-green-600">বছর শিক্ষকতা</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">৫০০০+</div>
                    <p className="text-red-600">শিক্ষার্থী</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">৫০+</div>
                    <p className="text-blue-600">উন্নয়ন প্রকল্প</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Work Tab */}
            <TabsContent value="work" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    কর্মজীবন ও অবদান
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold text-lg text-gray-900">শিক্ষা ক্ষেত্রে অবদান</h3>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        <li>• ২৫ বছরের শিক্ষকতা অভিজ্ঞতা</li>
                        <li>• ৫০০০+ শিক্ষার্থীকে শিক্ষাদান</li>
                        <li>• শিক্ষা পদ্ধতির আধুনিকায়নে ভূমিকা</li>
                        <li>• বিভিন্ন শিক্ষা প্রতিষ্ঠানে প্রভাষক হিসেবে দায়িত্ব পালন</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-lg text-gray-900">রাজনৈতিক ও সামাজিক কর্মকাণ্ড</h3>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        <li>• বর্তমানে সংসদ সদস্য হিসেবে দায়িত্ব পালন</li>
                        <li>• স্থানীয় উন্নয়ন প্রকল্পে নেতৃত্ব</li>
                        <li>• দরিদ্র জনগোষ্ঠীর কল্যাণে কাজ</li>
                        <li>• যুব সমাজের উন্নয়নে বিশেষ অবদান</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    সম্মাননা ও পুরস্কার
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">শিক্ষা ক্ষেত্রে</h4>
                      <p className="text-sm text-green-700 mt-1">শ্রেষ্ঠ শিক্ষক পুরস্কার ২০১৮</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800">সমাজসেবায়</h4>
                      <p className="text-sm text-red-700 mt-1">জনসেবা সম্মাননা ২০২০</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">রাজনীতিতে</h4>
                      <p className="text-sm text-blue-700 mt-1">জনপ্রিয় নেতা ২০২২</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">সাহিত্যে</h4>
                      <p className="text-sm text-yellow-700 mt-1">লেখক সম্মাননা ২০১৯</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-green-700">যোগাযোগের তথ্য</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">ইমেইল</p>
                          <p className="text-gray-600">chunnu.mp@parliament.gov.bd</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">ফোন</p>
                          <p className="text-gray-600">+880-1711-123456</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">ঠিকানা</p>
                          <p className="text-gray-600">সংসদ ভবন, ঢাকা-১০০০</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4">অফিস সময়সূচি</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>রবিবার - বৃহস্পতিবার:</span>
                          <span>সকাল ৯:০০ - বিকাল ৫:০০</span>
                        </div>
                        <div className="flex justify-between">
                          <span>শুক্রবার:</span>
                          <span>সকাল ১০:০০ - দুপুর ১:০০</span>
                        </div>
                        <div className="flex justify-between">
                          <span>শনিবার:</span>
                          <span>বন্ধ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© ২০২৪ প্রভাষক মীর মাহমুদুর রহমান চুন্নু। সকল অধিকার সংরক্ষিত।</p>
          <p className="text-sm text-gray-500 mt-2">"শিক্ষাই জাতির মেরুদণ্ড" - এই আদর্শে বিশ্বাসী</p>
        </div>
      </footer>
    </div>
  )
}
