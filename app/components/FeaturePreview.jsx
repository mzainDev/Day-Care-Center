import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturePreview() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Visual Features Tailored for Childcare
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore how our system supports billing and enrollment in one smooth interface.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Screenshot Card */}
          <Card className="shadow-lg rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle>Billing Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src="/ss/graphstats.JPG"
                alt="Billing Screenshot"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          {/* Enrollment Screenshot Card */}
          <Card className="shadow-lg rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle>Enrollment Workflow</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src="/ss/graphstats.JPG"
                alt="Enrollment Screenshot"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
        {/* <Card className="w-full max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden">
          <CardHeader className="text-left">
            <CardTitle>Billing & Enrollment Preview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Image
              src="/ss/graphstats.JPG"
              alt="Childcare Management Screenshot"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
