import React, { useState } from 'react';
import { CheckCircle, Circle, Calendar, Target, Users, BarChart3, ChevronDown, ChevronRight, Building2, TrendingUp, Shield, Zap } from 'lucide-react';
import '../DigitalRoadmap.css';

const DigitalRoadmapVisual = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const mentoringContent = {
    title: "더부동산 정연서대표님 멘토링 - 현행 업무 프로세스 진단",
    sections: [
      {
        id: "business_model",
        title: "사업 모델 검토",
        icon: <Building2 className="w-5 h-5" />,
        color: "text-blue-600",
        items: [
          {
            question: "무엇을 하려는가?",
            answer: "고급주거 중개",
            subItems: [
              "왜 하려는가? → 고액 수수료를 기대할 수 있는 좋은 사업",
              "혼자 vs 회사 운영 효용성 분석 필요",
              "물건이 많아 혼자 핸들링의 한계"
            ]
          }
        ]
      },
      {
        id: "optimization",
        title: "운영 최적화 분석",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-green-600",
        items: [
          {
            question: "효율성 극대화 방안",
            answer: "10명이 10억 vs 5명이 10억",
            subItems: [
              "사무실 위치와 임대료 적절성 검토",
              "인력 유지 비용 최적화 (식대, 교통비 등)",
              "마케팅 ROI 분석 및 개선"
            ]
          },
          {
            question: "마케팅 효율성",
            answer: "단위 마케팅 비용 대비 기대 매출 분석",
            subItems: [
              "계약 성공률이 낮은 물건 유형 파악",
              "효율이 낮은 채널 정리",
              "새로운 채널 발굴 (회사 사이트 → 리드 발굴)"
            ]
          }
        ]
      },
      {
        id: "organization",
        title: "조직 관리 진단",
        icon: <Users className="w-5 h-5" />,
        color: "text-purple-600",
        items: [
          {
            question: "조직 장악력",
            answer: "불평, 퍼포먼스, 스트레스 요인 분석",
            subItems: [
              "불평이 많은 이유: 태도 vs 컨트롤 이슈",
              "퍼포먼스 부족 원인: 스킬 부족 vs 동기 부족",
              "조직원 동기부여 요소 파악",
              "프로 3명 vs 아마추어 10명 전략 선택"
            ]
          }
        ]
      }
    ],
    proposals: [
      "명확한 비전과 미션 수립",
      "연간 목표, 사업 로드맵 수립", 
      "주간/월간/연간 KPI 설정",
      "조직 장악 - 이끌거나, 따르거나, 떠나거나",
      "시스템을 통한 업무 효율화",
      "비용 효율화 - 고정비, 마케팅 비용 최적화"
    ]
  };

  const roadmapData = [
    {
      weeks: "1-2주차",
      title: "디지털 진단 및 데이터 통합",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-blue-500",
      tasks: [
        "현행 업무 프로세스 진단 및 개선점 도출 (멘토링 내용 반영)",
        "디지털 역량 평가 및 발전 방향 수립",
        "데이터 통합 및 분석 기반 구축",
        "웹 서비스 요구사항 정의 및 기본 구조 설계"
      ],
      hasMentoring: true
    },
    {
      weeks: "3-4주차",
      title: "운영 효율화 시스템 구축",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-500",
      tasks: [
        "업무 자동화 시스템 설계 및 구현",
        "실시간 업무 현황 모니터링 체계 수립",
        "성과 측정 지표 개발 및 시각화",
        "매물 관리 시스템 및 직원 성과 관리 대시보드 기본 구현"
      ]
    },
    {
      weeks: "5주차",
      title: "솔루션 고객 서비스 및 웹 플랫폼 고도화",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500",
      tasks: [
        "고객 데이터 분석 및 인사이트 도출",
        "맞춤형 서비스 자동화 구현",
        "내부용 웹 대시보드 고도화 및 고객 관계 관리(CRM) 기능 통합",
        "영업 프로세스 추적 시스템 개발 완료"
      ]
    },
    {
      weeks: "6주차",
      title: "종합 적용 및 역량 강화",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-orange-500",
      tasks: [
        "통합 시스템 검증 및 최적화",
        "임직원 디지털 역량 강화 교육",
        "지속 가능한 디지털 혁신 전략 수립",
        "웹 서비스 최종 점검 및 배포"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          6주 디지털 혁신 프로젝트 로드맵
        </h1>
        <p className="text-gray-600 mb-6">더부동산 정연서대표님 멘토링 내용 반영</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      {/* 멘토링 상세 내용 */}
      <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">{mentoringContent.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {mentoringContent.sections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className={section.color}>{section.icon}</span>
                  <h3 className="ml-3 font-semibold text-gray-800">{section.title}</h3>
                </div>
                {expandedSections[section.id] ? 
                  <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                }
              </button>
              
              {expandedSections[section.id] && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  {section.items.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="font-medium text-gray-700 mb-2">{item.question}</div>
                      <div className="text-sm text-blue-600 mb-3 font-medium">{item.answer}</div>
                      <ul className="space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 제안사항 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">핵심 제안사항</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mentoringContent.proposals.map((proposal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm">{proposal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 기존 로드맵 타임라인 */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

        {roadmapData.map((phase, index) => (
          <div key={index} className="relative mb-16">
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}>
              {phase.icon}
            </div>

            <div className={`${index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8'} w-1/2`}>
              <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${phase.hasMentoring ? 'border-l-4 border-blue-500' : ''}`}>
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {phase.weeks}
                  </span>
                  {phase.hasMentoring && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      멘토링 반영
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {phase.title}
                </h3>

                <div className="space-y-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start space-x-3">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 프로젝트 요약 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">6</div>
          <div className="text-gray-600">총 기간 (주)</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">4</div>
          <div className="text-gray-600">주요 단계</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-purple-500 mb-2">16</div>
          <div className="text-gray-600">핵심 과제</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
          <div className="text-gray-600">제안사항</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalRoadmapVisual;