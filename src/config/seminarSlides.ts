import type { SlideEntry } from '@/config/slide-entry';

import Slide01Title from '@/components/slides/seminar/01-title';
import Slide02OfficeIntro from '@/components/slides/seminar/02-office-intro';
import Slide03Speaker from '@/components/slides/seminar/03-speaker';
import Slide04Agenda from '@/components/slides/seminar/04-agenda';
import Slide05Start from '@/components/slides/seminar/05-start';
import Slide06Chapter01 from '@/components/slides/seminar/06-chapter-01';
import Slide07KnowledgeRoadmap from '@/components/slides/seminar/07-knowledge-roadmap';
import Slide08QuoteSam from '@/components/slides/seminar/08-quote-sam';
import Slide09QuoteTobi from '@/components/slides/seminar/09-quote-tobi';
import Slide10QuoteJensen from '@/components/slides/seminar/10-quote-jensen';
import Slide11AgentMcp from '@/components/slides/seminar/11-agent-mcp';
import Slide12ScalesOfJustice from '@/components/slides/seminar/12-scales-of-justice';
import Slide13Recap from '@/components/slides/seminar/13-recap';
import Slide14Chapter02 from '@/components/slides/seminar/14-chapter-02';
import Slide15AiPrinciples from '@/components/slides/seminar/15-ai-principles';
import Slide16CognitiveTraps from '@/components/slides/seminar/16-cognitive-traps';
import Slide17BiasDivide from '@/components/slides/seminar/17-bias-divide';
import Slide18RightsNetwork from '@/components/slides/seminar/18-rights-network';
import Slide19GuidelinesText from '@/components/slides/seminar/19-guidelines-text';
import Slide20RiskBased from '@/components/slides/seminar/20-risk-based';
import Slide21RiskExamples from '@/components/slides/seminar/21-risk-examples';
import Slide22DataFlow from '@/components/slides/seminar/22-data-flow';
import Slide23Chapter02Recap from '@/components/slides/seminar/23-chapter-02-recap';
import Slide24Chapter02Back from '@/components/slides/seminar/24-chapter-02-back';
import Slide25InternalRulesWorkshop from '@/components/slides/seminar/25-internal-rules-workshop';
import Slide26RulesFunnel from '@/components/slides/seminar/26-rules-funnel';
import Slide27InternalRulesToc from '@/components/slides/seminar/27-internal-rules-toc';
import Slide28Section01Purpose from '@/components/slides/seminar/28-section-01-purpose';
import Slide29BasicPolicyKeywords from '@/components/slides/seminar/29-basic-policy-keywords';
import Slide30UsagePurposeRestrictions from '@/components/slides/seminar/30-usage-purpose-restrictions';
import Slide31UsagePurposeMaturity from '@/components/slides/seminar/31-usage-purpose-maturity';
import Slide32ChiefResponsibleRecap from '@/components/slides/seminar/32-chief-responsible-recap';
import Slide33Chapter01IdealsRecap from '@/components/slides/seminar/33-chapter-01-ideals-recap';
import Slide34Section02User from '@/components/slides/seminar/34-section-02-user';
import Slide35UserScopePatterns from '@/components/slides/seminar/35-user-scope-patterns';
import Slide36UserAccountMaturity from '@/components/slides/seminar/36-user-account-maturity';
import Slide37AccountManagement from '@/components/slides/seminar/37-account-management';
import Slide38Chapter02UserRecap from '@/components/slides/seminar/38-chapter-02-user-recap';
import Slide39Section03Tool from '@/components/slides/seminar/39-section-03-tool';
import Slide40ToolAnalysisPerspectives from '@/components/slides/seminar/40-tool-analysis-perspectives';
import Slide41AccessibleDevices from '@/components/slides/seminar/41-accessible-devices';
import Slide42AiToolPlanSpec from '@/components/slides/seminar/42-ai-tool-plan-spec';
import Slide43McpAgentHandling from '@/components/slides/seminar/43-mcp-agent-handling';
import Slide44McpAgentMaturity from '@/components/slides/seminar/44-mcp-agent-maturity';
import Slide45Chapter03ToolRecap from '@/components/slides/seminar/45-chapter-03-tool-recap';
import Slide46Section04Input from '@/components/slides/seminar/46-section-04-input';
import Slide47InputDataLegalRights from '@/components/slides/seminar/47-input-data-legal-rights';
import Slide48ProhibitedInputExamples from '@/components/slides/seminar/48-prohibited-input-examples';
import Slide49RiskBasedInputRelationship from '@/components/slides/seminar/49-risk-based-input-relationship';
import Slide50TradeSecretAct from '@/components/slides/seminar/50-trade-secret-act';
import Slide51TradeSecretGenaiManagement from '@/components/slides/seminar/51-trade-secret-genai-management';
import Slide52PipActGenaiCheckpoints from '@/components/slides/seminar/52-pip-act-genai-checkpoints';
import Slide53PipActGenaiArticles from '@/components/slides/seminar/53-pip-act-genai-articles';
import Slide54PipCloudService from '@/components/slides/seminar/54-pip-cloud-service';
import Slide55DelegationSupervision from '@/components/slides/seminar/55-delegation-supervision';
import Slide56DataResidencyPatterns from '@/components/slides/seminar/56-data-residency-patterns';
import Slide57Article28ForeignThirdParty from '@/components/slides/seminar/57-article-28-foreign-third-party';
import Slide58PipRecap from '@/components/slides/seminar/58-pip-recap';
import Slide59ThirdPartySecrets from '@/components/slides/seminar/59-third-party-secrets';
import Slide60CopyrightReviewFlow from '@/components/slides/seminar/60-copyright-review-flow';
import Slide61CopyrightWorkDefinition from '@/components/slides/seminar/61-copyright-work-definition';
import Slide62CopyrightLimitations from '@/components/slides/seminar/62-copyright-limitations';
import Slide63CopyrightArticle304 from '@/components/slides/seminar/63-copyright-article-30-4';
import Slide64CopyrightArticle475 from '@/components/slides/seminar/64-copyright-article-47-5';
import Slide65PublicDataLicense from '@/components/slides/seminar/65-public-data-license';
import Slide66CopyrightPenalty119 from '@/components/slides/seminar/66-copyright-penalty-119';
import Slide67Section05Output from '@/components/slides/seminar/67-section-05-output';
import Slide68OutputOverview from '@/components/slides/seminar/68-output-overview';
import Slide69HitlHumanReview from '@/components/slides/seminar/69-hitl-human-review';
import Slide70UnrecognizedCopyrightOutput from '@/components/slides/seminar/70-unrecognized-copyright-output';
import Slide71SecretInfoOutput from '@/components/slides/seminar/71-secret-info-output';
import Slide72OutputReviewCriteria from '@/components/slides/seminar/72-output-review-criteria';
import Slide73Section06Record from '@/components/slides/seminar/73-section-06-record';
import Slide74WorkLogHandling from '@/components/slides/seminar/74-work-log-handling';
import Slide75Section07Governance from '@/components/slides/seminar/75-section-07-governance';
import Slide76IncidentResponse from '@/components/slides/seminar/76-incident-response';
import Slide77RegulationReview from '@/components/slides/seminar/77-regulation-review';
import Slide78InternalLiteracy from '@/components/slides/seminar/78-internal-literacy';
import Slide79Chapter02BackRecap from '@/components/slides/seminar/79-chapter-02-back-recap';
import Slide80Chapter03 from '@/components/slides/seminar/80-chapter-03';
import Slide81AiUseTop7 from '@/components/slides/seminar/81-ai-use-top7';
import Slide82ChapterSales01 from '@/components/slides/seminar/82-chapter-sales-01';
import Slide83SalesLegalRights from '@/components/slides/seminar/83-sales-legal-rights';
import Slide84SalesMeetingAiCheckpoints from '@/components/slides/seminar/84-sales-meeting-ai-checkpoints';
import Slide85SalesAiPolicyExample from '@/components/slides/seminar/85-sales-ai-policy-example';
import Slide86SectionCh03Creative02 from '@/components/slides/seminar/86-section-ch03-creative-02';
import Slide87CreativeLegalRights from '@/components/slides/seminar/87-creative-legal-rights';
import Slide88CreativeLegalCheckpoints from '@/components/slides/seminar/88-creative-legal-checkpoints';
import Slide89SeminarRecap from '@/components/slides/seminar/89-seminar-recap';
import Slide90Closing from '@/components/slides/seminar/90-closing';

/**
 * 本番セミナー「生成AIを"安心して使い倒す"ためのルールづくり入門」用のスライド一覧。
 *
 * - 並び順 = 投影順
 * - 各エントリの `id` はファイル名と揃える（`01-title` 〜 `90-...`、番号重複なし）
 * - 投影順の連番（p1〜p71）は `note`・目次番号・ファイル先頭2桁が一致（`npm run renumber:seminar-files`）
 * - `background` を指定するとそのスライド表示中だけ背景を切り替えられる
 *
 * スライドを追加するときは:
 *   1. `src/components/slides/seminar/NN-xxx.tsx` を作成
 *   2. 本ファイル冒頭で import
 *   3. `seminarSlideRegistry` 末尾に push
 */
export const seminarSlideRegistry: SlideEntry[] = [
  // ── Opening ─────────────────────────────────────────────
  {
    id: '01-title',
    Component: Slide01Title,
    background: 'morph',
    chapter: 'opening',
    title: 'タイトル ＋ セミナーの楽しみ方（3 Tips）',
    note: 'p1:タイトル／3 Tips（ブラウザAI深堀・F11全画面・左上の目次）',
  },
  {
    id: '02-office-intro',
    Component: Slide02OfficeIntro,
    background: 'logoParticles',
    chapter: 'opening',
    title: '事務所紹介',
    note: 'p2:事務所紹介',
  },
  {
    id: '03-speaker',
    Component: Slide03Speaker,
    background: 'logoParticles',
    chapter: 'opening',
    title: '講師紹介',
    note: 'p3:講師紹介',
  },
  {
    id: '04-agenda',
    Component: Slide04Agenda,
    background: 'logoParticles',
    chapter: 'opening',
    title: '本日のテーマ（アジェンダ）',
    note: 'p4:本日のテーマ（アジェンダ）',
  },
  {
    id: '05-start',
    Component: Slide05Start,
    background: 'logoParticles',
    chapter: 'opening',
    title: 'では、始めましょう',
    note: 'p5:では、始めましょう（Chapter 01 への導入トランジション）',
  },

  // ── Chapter 01: 生成AI活用企業の動き ─────
  {
    id: '06-chapter-01',
    Component: Slide06Chapter01,
    chapter: 'chapter-01',
    title: 'Chapter 01 表紙 — 生成AI活用企業の動き',
    note: 'p6:Chapter 01 生成AI活用企業の動き（社内規程に向けたビジネス活用イメージ）',
  },
  {
    id: '07-knowledge-roadmap',
    Component: Slide07KnowledgeRoadmap,
    chapter: 'chapter-01',
    title: '仕事が生成AIの無形業務領域になるまで',
    note: 'p7:ナレッジロードマップ — 人/紙/クラウド/AIモデルの4フェーズ',
  },
  {
    id: '08-quote-sam',
    Component: Slide08QuoteSam,
    background: 'morph',
    chapter: 'chapter-01',
    title: '引用 — サム・アルトマン（OpenAI）',
    note: 'p8:引用 サム・アルトマン — AIは最大の経済的エンパワーメント',
  },
  {
    id: '09-quote-tobi',
    Component: Slide09QuoteTobi,
    background: 'morph',
    chapter: 'chapter-01',
    title: '引用 — トビ・ルーク（Shopify）',
    note: 'p9:引用 トビ・ルーク — なぜAIにできないかを証明せよ',
  },
  {
    id: '10-quote-jensen',
    Component: Slide10QuoteJensen,
    background: 'morph',
    chapter: 'chapter-01',
    title: '引用 — ジェンスン・フアン（NVIDIA）',
    note: 'p10:引用 ジェンスン・フアン — AIを使いこなす人が仕事を奪う',
  },
  {
    id: '11-agent-mcp',
    Component: Slide11AgentMcp,
    chapter: 'chapter-01',
    title: 'エージェントやMCPの活用',
    note: 'p11:エージェントやMCPの活用（旧 近時の生成AIホットトピック）',
  },
  {
    id: '12-scales-of-justice',
    Component: Slide12ScalesOfJustice,
    chapter: 'chapter-01',
    title: '生成AI分野の法務は安全に使い倒すこと（天秤）',
    note: 'p12:守りの法務=ブレーキ／攻めの法務=アクセル（常時ロッキングする天秤）',
  },
  {
    id: '13-recap',
    Component: Slide13Recap,
    chapter: 'chapter-01',
    title: 'Recap — ここまでの3つのポイント',
    note: 'p13:Recap — 無形業務領域／MITの教訓／エージェント・MCP前提',
  },

  // ── Chapter 02: 生成AI社内規程の作成 ────────────────────
  // ── Chapter 02 前編: 生成AI社内規程の作成（全体像） ──────────────────────────
  {
    id: '14-chapter-02',
    Component: Slide14Chapter02,
    chapter: 'chapter-02-front',
    title: 'Chapter 02 表紙（前編）— 社内規程の全体像',
    note: 'p14:Chapter 02 前編 — 生成AI社内規程の作成（全体像解説）',
  },
  {
    id: '15-ai-principles',
    Component: Slide15AiPrinciples,
    chapter: 'chapter-02-front',
    title: 'AI事業者ガイドライン基本理念',
    note: 'p15:AI事業者ガイドライン基本理念 — Dignity / Diversity & Inclusion / Sustainability',
  },
  {
    id: '16-cognitive-traps',
    Component: Slide16CognitiveTraps,
    chapter: 'chapter-02-front',
    title: '人間の尊厳 — 思考の放棄 × サイコファンシー',
    note: 'p16:人間の尊厳に背く2つの落とし穴（思考の放棄/サイコファンシー）',
  },
  {
    id: '17-bias-divide',
    Component: Slide17BiasDivide,
    chapter: 'chapter-02-front',
    title: '多様性・包摂 — バイアス × AIディバイド',
    note: 'p17:多様性・包摂を損なう2つの構造（バイアス/AIディバイド）',
  },
  {
    id: '18-rights-network',
    Component: Slide18RightsNetwork,
    chapter: 'chapter-02-front',
    title: '持続可能性 — 崩壊の具体例 × 果実分配の設計',
    note: 'p18:インフルエンサー生成動画（崩壊）× 生成AIの果実分配（仕組み設計）',
  },
  {
    id: '19-guidelines-text',
    Component: Slide19GuidelinesText,
    chapter: 'chapter-02-front',
    title: '経産省AIガイドライン1.2版 — リスクベース引用',
    note: 'p19:経産省AIガイドライン1.2版 — リスクベースアプローチ引用',
    textSelectable: true,
  },
  {
    id: '20-risk-based',
    Component: Slide20RiskBased,
    chapter: 'chapter-02-front',
    title: 'リスクベースアプローチとは（マトリックス）',
    note: 'p20:リスクベースアプローチとは？（リスクマトリックス）',
  },
  {
    id: '21-risk-examples',
    Component: Slide21RiskExamples,
    chapter: 'chapter-02-front',
    title: 'リスクベースアプローチ — 具体例',
    note: 'p21:リスクベースアプローチ具体例（チャット形式）',
  },
  {
    id: '22-data-flow',
    Component: Slide22DataFlow,
    chapter: 'chapter-02-front',
    title: '生成AI社内規程に関する４つの分析セグメント',
    note: 'p22:生成AI社内規程に関する４つの分析セグメント（PC↔AI 双方向フロー）',
  },
  {
    id: '23-chapter-02-recap',
    Component: Slide23Chapter02Recap,
    chapter: 'chapter-02-front',
    title: 'Recap — Chapter 02 前編の3つのポイント',
    note: 'p23:Chapter 02 前編まとめ Recap',
  },

  // ── Chapter 02 後編: 生成AI社内規程の作成（各論） ────────────────────────────
  {
    id: '24-chapter-02-back',
    Component: Slide24Chapter02Back,
    chapter: 'chapter-02-back',
    title: 'Chapter 02 後編 — 社内規程の各論へ',
    note: 'p24:Chapter 02 後編 — 生成AI社内規程の作成（各論）',
  },
  {
    id: '25-internal-rules-workshop',
    Component: Slide25InternalRulesWorkshop,
    chapter: 'chapter-02-back',
    title: 'Workshop — 社内生成AI利用規程の作成（Gemini）',
    note: 'p25:Workshop — Geminiで規程作成 → Gemに貼付けてフィードバック',
  },
  {
    id: '26-rules-funnel',
    Component: Slide26RulesFunnel,
    chapter: 'chapter-02-back',
    title: '社内規程の射程 — 各AI利用規約の範囲内',
    note: 'p26:生成AI利用規約 → 社内生成AI利用規約 ファネル図',
  },
  {
    id: '27-internal-rules-toc',
    Component: Slide27InternalRulesToc,
    chapter: 'chapter-02-back',
    title: '社内生成AI利用規程 — 全条項の目次（CardWheel）',
    note: 'p27:社内規程の目次 — 全25条項 CardWheel + サイドバー',
  },
  {
    id: '28-section-01-purpose',
    Component: Slide28Section01Purpose,
    chapter: 'chapter-02-back',
    title: 'Section 01 扉 — 目的・基本理念',
    note: 'p28:Section 01 扉 — 目的・基本理念（1-1〜1-3）',
  },
  {
    id: '29-basic-policy-keywords',
    Component: Slide29BasicPolicyKeywords,
    chapter: 'chapter-02-back',
    rulesToc: '1-1',
    title: '1-1 基本方針 — 考えるべき項目',
    note: 'p29:1-1 基本方針 — KeywordCloud（10項目）',
  },
  {
    id: '30-usage-purpose-restrictions',
    Component: Slide30UsagePurposeRestrictions,
    chapter: 'chapter-02-back',
    rulesToc: '1-2',
    title: '1-2 利用目的 — 使用可能な領域と関連規程',
    note: 'p30:領域縮小ギミック（関連規程クリック適用）',
    textSelectable: false,
  },
  {
    id: '31-usage-purpose-maturity',
    Component: Slide31UsagePurposeMaturity,
    chapter: 'chapter-02-back',
    rulesToc: '1-2',
    title: '1-2 利用目的 — 成熟度モデル',
    note: 'p31:PricingTiers型 — Starter / Standard / PRO',
  },
  {
    id: '32-chief-responsible-recap',
    Component: Slide32ChiefResponsibleRecap,
    chapter: 'chapter-02-back',
    rulesToc: '1-3',
    title: '1-3 統括責任者 — 求められるもの',
    note: 'p32:1-3 統括責任者 — Recap（4項目）',
  },
  {
    id: '33-chapter-01-ideals-recap',
    Component: Slide33Chapter01IdealsRecap,
    chapter: 'chapter-02-back',
    rulesToc: '1',
    title: 'Recap — 目的・基本理念で抑えるべきポイント',
    note: 'p33:Recap — 1 目的・基本理念（3項目）',
  },
  {
    id: '34-section-02-user',
    Component: Slide34Section02User,
    chapter: 'chapter-02-back',
    title: 'Section 02 扉 — ユーザー',
    note: 'p34:Section 02 扉 — ユーザー（2-1〜2-2）',
  },
  {
    id: '35-user-scope-patterns',
    Component: Slide35UserScopePatterns,
    chapter: 'chapter-02-back',
    rulesToc: '2-1',
    title: '2-1 使用者の範囲 — 設定の重要ポイント',
    note: 'p35:2-1 使用者の範囲 — 明確化・間接利用禁止・格差配慮',
  },
  {
    id: '36-user-account-maturity',
    Component: Slide36UserAccountMaturity,
    chapter: 'chapter-02-back',
    rulesToc: '2',
    title: '2 ユーザー — アカウント付与の成熟度',
    note: 'p36:スターター / スタンダード / プロ — アカウント広げ方',
  },
  {
    id: '37-account-management',
    Component: Slide37AccountManagement,
    chapter: 'chapter-02-back',
    rulesToc: '2-2',
    title: '2-2 アカウントの管理 — 2つの要点',
    note: 'p37:2-2 アカウントの管理 — 共有禁止 / アカウント別アクセス',
  },
  {
    id: '38-chapter-02-user-recap',
    Component: Slide38Chapter02UserRecap,
    chapter: 'chapter-02-back',
    rulesToc: '2',
    title: 'Recap — ユーザーで抑えるべきポイント',
    note: 'p38:Recap — 2 ユーザー（3項目）',
  },
  {
    id: '39-section-03-tool',
    Component: Slide39Section03Tool,
    chapter: 'chapter-02-back',
    title: 'Section 03 扉 — ツール',
    note: 'p39:Section 03 扉 — ツール（3-1〜3-4）',
  },
  {
    id: '40-tool-analysis-perspectives',
    Component: Slide40ToolAnalysisPerspectives,
    chapter: 'chapter-02-back',
    rulesToc: '3-1',
    title: '3-1 ツール総論 — 生成AIツール分析の視点',
    note: 'p40:3-1 ツール総論 — 4つの分析視点（LayeredArch + ギミック）',
  },
  {
    id: '41-accessible-devices',
    Component: Slide41AccessibleDevices,
    chapter: 'chapter-02-back',
    rulesToc: '3-2',
    title: '3-2 アクセス可能な端末 — 企業が注意すべきこと',
    note: 'p41:3-2 アクセス可能な端末 — 私用端末禁止 / 法的・技術的対策',
  },
  {
    id: '42-ai-tool-plan-spec',
    Component: Slide42AiToolPlanSpec,
    chapter: 'chapter-02-back',
    rulesToc: '3-3',
    title: '3-3 使用可能なAIツール・プランの指定',
    note: 'p42:3-3 ツール・プラン指定 — 無料/個人禁止 / シャドーAI対策',
  },
  {
    id: '43-mcp-agent-handling',
    Component: Slide43McpAgentHandling,
    chapter: 'chapter-02-back',
    rulesToc: '3-4',
    title: '3-4 エージェント・MCPの取扱い — 外部アプリへの送信',
    note: 'p43:3-4 MCP・エージェント — WorldMap風データフロー図',
  },
  {
    id: '44-mcp-agent-maturity',
    Component: Slide44McpAgentMaturity,
    chapter: 'chapter-02-back',
    rulesToc: '3-4',
    title: '3-4 エージェント・MCP — ツール・接続の成熟度',
    note: 'p44:3-4 MCP成熟度 — スターター／スタンダード／プロ（PricingTiers風）',
  },
  {
    id: '45-chapter-03-tool-recap',
    Component: Slide45Chapter03ToolRecap,
    chapter: 'chapter-02-back',
    rulesToc: '3',
    title: 'Recap — ツールで抑えるべきポイント',
    note: 'p45:Recap — 3 ツール全体（無料・個人プラン／端末／MCP接続）',
  },
  {
    id: '46-section-04-input',
    Component: Slide46Section04Input,
    chapter: 'chapter-02-back',
    title: 'Section 04 扉 — 入力情報',
    note: 'p46:Section 04 扉 — 入力情報（4-1〜4-6）',
  },
  {
    id: '47-input-data-legal-rights',
    Component: Slide47InputDataLegalRights,
    chapter: 'chapter-02-back',
    rulesToc: '4-1',
    title: '4-1 入力情報 総論 — データの法的権利関係',
    note: 'p47:4-1 入力情報 総論 — DATAハブ + 5法令（KnowledgeGraph風）',
  },
  {
    id: '48-prohibited-input-examples',
    Component: Slide48ProhibitedInputExamples,
    chapter: 'chapter-02-back',
    rulesToc: '4-2',
    title: '4-2 入力禁止情報 — 規程に盛り込む具体例',
    note: 'p48:4-2 入力禁止情報 — 6カテゴリ具体例（FurtherReading風）',
    textSelectable: true,
  },
  {
    id: '49-risk-based-input-relationship',
    Component: Slide49RiskBasedInputRelationship,
    chapter: 'chapter-02-back',
    rulesToc: '4-2',
    title: '4-2 入力禁止情報 — リスクベースアプローチとの関係',
    note: 'p49:4-2 入力禁止 — 原則禁止 → RBA → 例外解除（Pipeline風）',
  },
  {
    id: '50-trade-secret-act',
    Component: Slide50TradeSecretAct,
    chapter: 'chapter-02-back',
    rulesToc: '4-3',
    title: '4-3 社内秘密情報・営業秘密 — 不正競争防止法',
    note: 'p50:4-3 営業秘密 — 法第2条6項 + 秘密管理フロー + 経産省指針リンク',
    textSelectable: true,
  },
  {
    id: '51-trade-secret-genai-management',
    Component: Slide51TradeSecretGenaiManagement,
    chapter: 'chapter-02-back',
    rulesToc: '4-3',
    title: '4-3 営業秘密 — 生成AI利用と秘密管理性（令和7年改訂指針）',
    note: 'p51:4-3 営業秘密×生成AI — 営業秘密管理指針 p.18 注2（管理単位C/D・秘密管理性は否定されない）',
    textSelectable: true,
  },
  {
    id: '52-pip-act-genai-checkpoints',
    Component: Slide52PipActGenaiCheckpoints,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — 個人情報保護法と生成AIの論点',
    note: 'p52:4-4 個情法×生成AI — 3点チェックリスト（NextSteps風）',
  },
  {
    id: '53-pip-act-genai-articles',
    Component: Slide53PipActGenaiArticles,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — プライバシーポリシーと生成AI活用',
    note: 'p53:4-4 プライバシーポリシー×生成AI — ①ポリシーでカバーされているか ②学習提供は別目的 ③プロファイリングは新たな利用目的',
  },
  {
    id: '54-pip-cloud-service',
    Component: Slide54PipCloudService,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — 個人データとクラウドサービス（クラウド例外）',
    note: 'p54:4-4 クラウド例外 — 27条/27条5項1号/ガイドラインQ&A ＋ 該当・非該当の判断フロー（23条/25条）',
    textSelectable: true,
  },
  {
    id: '55-delegation-supervision',
    Component: Slide55DelegationSupervision,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — 委託先の監督（第三者認証 × PDCA）',
    note: 'p55:4-4 委託先監督 — 主要サービスの第三者認証（SOC 2等）＋ PDCA サイクル',
  },
  {
    id: '56-data-residency-patterns',
    Component: Slide56DataResidencyPatterns,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — データレジデンシーパターンの概要',
    note: 'p56:4-4 データレジデンシー — オンプレ/SaaSフロー + 個情法28条ハイライト',
    textSelectable: true,
  },
  {
    id: '57-article-28-foreign-third-party',
    Component: Slide57Article28ForeignThirdParty,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — 第28条（外国第三者提供）',
    note: 'p57:4-4 第28条 — 条文 + 要件/効果/例外フロー',
    textSelectable: true,
  },
  {
    id: '58-pip-recap',
    Component: Slide58PipRecap,
    chapter: 'chapter-02-back',
    rulesToc: '4-4',
    title: '4-4 個人情報 — 全体判断フロー',
    note: 'p58:4-4 個人データ×生成AI 判断フロー（Step i→vii）',
  },
  {
    id: '59-third-party-secrets',
    Component: Slide59ThirdPartySecrets,
    chapter: 'chapter-02-back',
    rulesToc: '4-5',
    title: '4-5 取引先・他社の秘密情報 — 秘密保持義務',
    note: 'p59:4-5 取引先・他社の秘密情報 — Cube3D（契約書）',
  },
  {
    id: '60-copyright-review-flow',
    Component: Slide60CopyrightReviewFlow,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — プロンプトに他人の制作物を入力する際の検討フロー',
    note: 'p60:4-6 著作物 — Pipeline（4ステップ検討フロー）',
  },
  {
    id: '61-copyright-work-definition',
    Component: Slide61CopyrightWorkDefinition,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — Step 1 著作物該当性（創作性）',
    note: 'p61:4-6 Step 1 — 著作権法第2条 + 原則2件 + 注意点2件（BentoGrid風）',
    textSelectable: true,
  },
  {
    id: '62-copyright-limitations',
    Component: Slide62CopyrightLimitations,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — 著作権法における権利制限',
    note: 'p62:4-6 権利制限 — 第30条〜第47条の7 一覧（FurtherReading風）',
    textSelectable: true,
  },
  {
    id: '63-copyright-article-30-4',
    Component: Slide63CopyrightArticle304,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — 第30条の4 条文解説（生成AI入力）',
    note: 'p63:4-6 第30条の4 + 文化審議会「AIと著作権に関する考え方について」',
    textSelectable: true,
  },
  {
    id: '64-copyright-article-47-5',
    Component: Slide64CopyrightArticle475,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — 第47条の5 条文解説（軽微利用）',
    note: 'p64:4-6 第47条の5 条文 + Web検索/RAGの適用例',
    textSelectable: true,
  },
  {
    id: '65-public-data-license',
    Component: Slide65PublicDataLicense,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — 公共データ利用規約（PDL1.0）',
    note: 'p65:公共データ利用規約（第1.0版）— デジタル庁',
    textSelectable: true,
  },
  {
    id: '66-copyright-penalty-119',
    Component: Slide66CopyrightPenalty119,
    chapter: 'chapter-02-back',
    rulesToc: '4-6',
    title: '4-6 著作物 — 請求類型と故意・過失の効果',
    note: 'p66:侵害に対する請求類型と故意・過失の効果（06_侵害に対する措置）',
    textSelectable: true,
  },
  {
    id: '67-section-05-output',
    Component: Slide67Section05Output,
    chapter: 'chapter-02-back',
    title: 'Section 05 扉 — 出力情報',
    note: 'p67:Section 05 扉 — 出力情報（5-1〜5-5）',
  },
  {
    id: '68-output-overview',
    Component: Slide68OutputOverview,
    chapter: 'chapter-02-back',
    rulesToc: '5-1',
    title: '5-1 出力情報 総論 — 出力利用の構造',
    note: 'p68:5-1 出力総論 — 3論点（正確性・著作権・秘密情報）と対応手段',
  },
  {
    id: '69-hitl-human-review',
    Component: Slide69HitlHumanReview,
    chapter: 'chapter-02-back',
    rulesToc: '5-2',
    title: '5-2 出力情報 — HITL（人間による確認）',
    note: 'p69:5-2 HITL — 出力の責任・注意点3項目 + プロンプト構成図',
    textSelectable: true,
  },
  {
    id: '70-unrecognized-copyright-output',
    Component: Slide70UnrecognizedCopyrightOutput,
    chapter: 'chapter-02-back',
    rulesToc: '5-3',
    title: '5-3 出力情報 — 認識の無い著作物の出力',
    note: 'p70:5-3 著作権関連 — 文化庁「AIと著作権に関する考え方」（依拠性の推認）',
    textSelectable: true,
  },
  {
    id: '71-secret-info-output',
    Component: Slide71SecretInfoOutput,
    chapter: 'chapter-02-back',
    rulesToc: '5-4',
    title: '5-4 出力情報 — 秘密情報入力時の出力の扱い',
    note: 'p71:5-4 秘密情報入力 — 出力も営業秘密・守秘義務対象として管理',
    textSelectable: true,
  },
  {
    id: '72-output-review-criteria',
    Component: Slide72OutputReviewCriteria,
    chapter: 'chapter-02-back',
    rulesToc: '5-5',
    title: '5-5 出力情報 — 社内外利用時の審査基準',
    note: 'p72:5-5 社内審査 — 担当者・資料・方法・利用指定（RBA）',
    textSelectable: true,
  },
  {
    id: '73-section-06-record',
    Component: Slide73Section06Record,
    chapter: 'chapter-02-back',
    title: 'Section 06 扉 — 記録',
    note: 'p73:Section 06 扉 — 記録（6-1）',
  },
  {
    id: '74-work-log-handling',
    Component: Slide74WorkLogHandling,
    chapter: 'chapter-02-back',
    rulesToc: '6-1',
    title: '6-1 記録 — 作業ログの役割',
    note: 'p74:6-1 作業ログ — 証拠・創作性判断・社内改善の3つの役割',
    textSelectable: true,
  },
  {
    id: '75-section-07-governance',
    Component: Slide75Section07Governance,
    chapter: 'chapter-02-back',
    title: 'Section 07 扉 — ガバナンス',
    note: 'p75:Section 07 扉 — ガバナンス（7-1〜7-3）',
  },
  {
    id: '76-incident-response',
    Component: Slide76IncidentResponse,
    chapter: 'chapter-02-back',
    rulesToc: '7-1',
    title: '7-1 違反時の対応 — 種類の見極め＋3アクション',
    note: 'p76:7-1 違反時の対応 — 規程準拠／非準拠 × 保全・関係者特定・専門家支援',
  },
  {
    id: '77-regulation-review',
    Component: Slide77RegulationReview,
    chapter: 'chapter-02-back',
    rulesToc: '7-3',
    title: '7-3 規程の見直し — 事業者改訂頻度と社内見直し',
    note: 'p77:7-3 規程見直し — OpenAI/Anthropic/Google 改訂頻度インフォグラフ + 半年〜1年マスト',
  },
  {
    id: '78-internal-literacy',
    Component: Slide78InternalLiteracy,
    chapter: 'chapter-02-back',
    rulesToc: '7-2',
    title: '7-2 社内リテラシー向上 — 知識・判断・行動の3層',
    note: 'p78:7-2 リテラシー — Know/Judge/Act × AI事業者ガイドライン基本理念',
  },
  {
    id: '79-chapter-02-back-recap',
    Component: Slide79Chapter02BackRecap,
    chapter: 'chapter-02-back',
    rulesToc: '7',
    title: 'Recap — 社内生成AI利用規程（後編まとめ）',
    note: 'p79:Recap 後編 — 既存規程の枠内・4項目・RBA',
    textSelectable: true,
  },

  // ── Chapter 03: その他生成AIに関する法的論点 ───────────────
  {
    id: '80-chapter-03',
    Component: Slide80Chapter03,
    chapter: 'chapter-03',
    title: 'Chapter 03 — その他生成AIに関する法的論点',
    note: 'p80:Chapter 03 — その他生成AIに関する法的論点',
  },
  {
    id: '81-ai-use-top7',
    Component: Slide81AiUseTop7,
    chapter: 'chapter-03',
    title: '業務での活用用途 TOP7 — 管理職調査',
    note: 'p81:活用用途TOP7 横棒グラフ（コーレ2026・注記付き）',
  },

  {
    id: '82-chapter-sales-01',
    Component: Slide82ChapterSales01,
    chapter: 'chapter-03',
    title: '商談編 01 — 取引先・関係者の生成AIと法的論点',
    note: 'p82:Ch03 中間見出し — 商談編01 取引先・関係者の生成AI利用の法的問題',
  },
  {
    id: '83-sales-legal-rights',
    Component: Slide83SalesLegalRights,
    chapter: 'chapter-03',
    title: '商談時に気を付けるべき法律関係',
    note: 'p83:商談編 — 法的権利関係図（営業秘密・秘密保持契約ハイライト）',
  },
  {
    id: '84-sales-meeting-ai-checkpoints',
    Component: Slide84SalesMeetingAiCheckpoints,
    chapter: 'chapter-03',
    title: 'Webミーティング・議事録AI — チェックポイント',
    note: 'p84:商談編 — 録音録画周知・AI不使用・条件定め',
  },
  {
    id: '85-sales-ai-policy-example',
    Component: Slide85SalesAiPolicyExample,
    chapter: 'chapter-03',
    title: 'ポリシー例 — 対面・商談における生成AIツール使用',
    note: 'p85:商談編 — 生成AI使用ポリシー例（第1〜4条）',
    textSelectable: true,
  },
  {
    id: '86-section-ch03-creative-02',
    Component: Slide86SectionCh03Creative02,
    chapter: 'chapter-03',
    title: 'クリエイティブ編 02 — 業務委託と生成AI',
    note: 'p86:Ch03 中間見出し — クリエイティブ編02 業務委託×生成AI',
  },
  {
    id: '87-creative-legal-rights',
    Component: Slide87CreativeLegalRights,
    chapter: 'chapter-03',
    title: '業務委託時に気を付けるべき法律関係',
    note: 'p87:クリエイティブ編 — 法的権利関係図（著作権・不正競争防止法・人格的利益）',
  },
  {
    id: '88-creative-legal-checkpoints',
    Component: Slide88CreativeLegalCheckpoints,
    chapter: 'chapter-03',
    title: 'クリエイター業務委託時の法的チェックポイント',
    note: 'p88:クリエイティブ編 — 業務委託の4チェックポイント（著作物性／譲渡対価／侵害Tips／従業員モデル）',
  },

  // ── Closing: 本セミナーのまとめ ──────────────────────────────
  {
    id: '89-seminar-recap',
    Component: Slide89SeminarRecap,
    chapter: 'closing',
    title: '本セミナーの3つの核心メッセージ',
    note: 'p89:Final Recap — Chapter 01〜03 の核心メッセージ',
  },
  {
    id: '90-closing',
    Component: Slide90Closing,
    background: 'logoParticles',
    chapter: 'closing',
    title: 'ご清聴ありがとうございました',
    note: 'p90:Closing — ロゴパーティクル + Thank You + 事務所情報',
  },
];
