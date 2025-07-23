import React, { useState } from 'react';
import { CheckCircle, Circle, Calendar, Target, Users, BarChart3, ChevronDown, ChevronRight, Building2, TrendingUp, Shield, Zap, AlertCircle, User } from 'lucide-react';

const DigitalRoadmapVisual = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const roadmapData = [
    {
      weeks: "1-2주차",
      title: "디지털 진단 및 데이터 통합",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-blue-500",
      tasks: [
        "현행 업무 프로세스 진단 및 개선점 도출",
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
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      {/* 로드맵 타임라인 */}
      <div className="relative mb-12">
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

      {/* 멘토링 상세 내용 - 항상 표시 */}
      <div className="mb-12 bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">더부동산 정연서대표님 멘토링</h2>
        </div>

        {/* 1. 들어가기에 앞서 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">1. 들어가기에 앞서</h3>
          <div className="ml-6 space-y-2 text-gray-600">
            <div>1. 철저히 제3자적 입장에서 관찰하고 생각한 결과물</div>
            <div>2. 업에 대한 이해나 현 상황에 대한 고려가 부족할 수 있음</div>
            <div>3. 정답이 아닌 생각과 의사결정의 흐름을 돕기 위함</div>
          </div>
        </div>

        {/* 2. 무엇이 하려는가? */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">2. 무엇을 하려는가? 고급주거 중개</h3>
          
          <div className="ml-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">1. 왜 하려는가? 고액 수수료를 기대할 수 있는 좋은 사업이니까?</h4>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">2. 혼자 하면 되지 않나? 물건이 많은데 혼자 다 핸들링하기 어려워서?</h4>
              <div className="ml-6 space-y-2 text-gray-600">
                <div>1. 혼자 할 때 개인 기대 효용 vs. 회사로 했을 때 개인 기대 효용</div>
                <div>2. 혼자 할 때 기대 효용이 높다면? 혼자하면 됨</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">3. 회사로 할 때 개인 기대 효용이 높다면?</h4>
              <div className="ml-6 space-y-3">
                <div>
                  <div className="font-medium text-gray-700 mb-2">1. 최적화가 필요함</div>
                  <div className="ml-6 space-y-2 text-gray-600">
                    <div>1. 10명이 10억 매출 vs 5명이 10억 매출</div>
                    <div>2. 낭비되는 비용은 없는가?</div>
                    <div className="ml-6 space-y-1">
                      <div>1. 사무실 위치와 임대료는 적절한가? 그 외 고정비 항목은? 비용 규모는 적절한가?</div>
                      <div>2. 인력 유지 비용은 적절한가? 1명에게 들어가는 비용은? (식대, 교통비 등)</div>
                      <div>3. 마케팅 ROI는 충분히 나오고 있는가?</div>
                      <div className="ml-6 space-y-1">
                        <div>1. 모든 물건에 마케팅을 해도 계약이 되는 것도 있고 안되는 것도 있음</div>
                        <div>2. 마케팅을 해도 계약이 안되는 것들의 유형이 있다면 굳이 해야할까?</div>
                        <div>3. 단위 마케팅 비용의 기대 매출은? (전체 매출/전체 마케팅 비용)</div>
                        <div>4. 위 단위 마케팅 비용의 기대 매출을 올리는 방법은?</div>
                        <div>5. 효율이 낮은 채널은 정리하고 새로운 채널에 대한 시도는? (예: 회사 사이트 → 리드 발굴)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-2">2. 조직은 장악하고 있는가?</div>
                  <div className="ml-6 space-y-1 text-gray-600">
                    <div>1. 대표의 권위가 있는가?</div>
                    <div>2. 조직원들이 불평이 많은 이유는? 태도 이슈? 컨트롤 가능?</div>
                    <div>3. 퍼포먼스가 안나는 이유는? 스킬 부족? 돕는다 또는 직접한다 vs. 스스로 할 수 있게 한다</div>
                    <div>4. 조직원들은 스트레스가 있나? 대표의 스트레스 vs. 조직원들의 스트레스</div>
                    <div>5. 조직원들이 원하는 것은? 무엇으로 동기부여가 되는가? 어떻게 만족시켜 줄 것인가?</div>
                    <div>6. 프로 3명 vs. 아마추어 10명. 다 내 맘 같지 않다. 데리고 갈 이유가 있나?</div>
                    <div>7. 대시보드가 만들어지면 조직관리가 효과적으로 될까? 없어도 할 수 있지 않았을까?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 전반적인 제안 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">3. 전반적인 제안</h3>
          <div className="ml-6 space-y-2 text-gray-600">
            <div>1. 명확한 대표로서의 아이덴티티 필요</div>
            <div>2. 명확한 비전과 미션 수립</div>
            <div>3. 연간 목표, 사업 로드맵 수립</div>
            <div>4. 주간/월간/연간 KPI 설정 - 프리랜서라 수립이 어렵다면 달성시 인센티브 설정, 미니멈 달성 못할 시 계약 해지</div>
            <div>5. 조직 장악 - 이끌거나, 따르거나, 떠나거나</div>
            <div>6. 인당 매출 증대 방안</div>
            <div>7. 시스템을 통한 업무 효율화 - 컴플레인을 줄이는 게 목적이 아니라 생산성을 높이는 목적</div>
            <div>8. P&L 관리 필요 (예: 비용 효율화 - 고정비, 마케팅 비용 최적화)</div>
          </div>
        </div>

        {/* 4. 우선순위 제안 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">4. 우선순위 제안 (예시)</h3>
          <div className="ml-6 space-y-2 text-gray-600">
            <div>1. 회사 운영 정책, 구조 수립</div>
            <div>2. 조직원 관리</div>
            <div>3. P&L 관리</div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-blue-800 font-medium">
              이 멘토링 내용은 1-2주차의 현행 업무 프로세스 진단 및 개선점 도출과 관련된 내용입니다.
            </span>
          </div>
        </div>
      </div>

      {/* 프로젝트 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <div className="text-3xl font-bold text-orange-500 mb-2">1</div>
          <div className="text-gray-600">멘토링 세션</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalRoadmapVisual;