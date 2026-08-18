set local check_function_bodies = off;

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "service_role";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "service_role";

create table "public"."ai_conversations" (
  "id"         uuid                     not null default gen_random_uuid(),
  "student_id" uuid                     not null,
  "title"      text,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "ai_conversations_pkey" primary key (id)
);

alter table "public"."ai_conversations"
  enable row level security;

create table "public"."ai_messages" (
  "id"              uuid                     not null default gen_random_uuid(),
  "conversation_id" uuid                     not null,
  "content"         text                     not null,
  "created_at"      timestamp with time zone not null default now(),
  constraint "ai_messages_pkey" primary key (id)
);

alter table "public"."ai_messages"
  enable row level security;

create table "public"."allocation_runs" (
  "id"                           uuid                     not null default gen_random_uuid(),
  "executed_by"                  uuid,
  "total_students"               integer                  not null default 0,
  "total_internships"            integer                  not null default 0,
  "total_allocated"              integer                  not null default 0,
  "unfilled_seats"               integer                  not null default 0,
  "average_score"                numeric(6,3),
  "preference_satisfaction_rate" numeric(6,3),
  "constraint_violations"        integer                  not null default 0,
  "started_at"                   timestamp with time zone,
  "completed_at"                 timestamp with time zone,
  "metadata"                     jsonb                    not null default '{}'::jsonb,
  constraint "allocation_run_counts_valid"
    check (((total_students >= 0) AND (total_internships >= 0) AND (total_allocated >= 0) AND (unfilled_seats >= 0) AND (constraint_violations >= 0))),
  constraint "allocation_run_metrics_valid" check (((average_score IS NULL) OR ((average_score >= (0)::numeric) AND (average_score <= (100)::numeric)))),
  constraint "allocation_run_preference_rate_valid"
    check (((preference_satisfaction_rate IS NULL) OR ((preference_satisfaction_rate >= (0)::numeric) AND (preference_satisfaction_rate <= (100)::numeric)))),
  constraint "allocation_runs_pkey" primary key (id)
);

alter table "public"."allocation_runs"
  enable row level security;

create table "public"."allocations" (
  "id"                  uuid                     not null default gen_random_uuid(),
  "allocation_run_id"   uuid                     not null,
  "student_id"          uuid                     not null,
  "internship_id"       uuid                     not null,
  "compatibility_score" numeric(6,3),
  "allocation_score"    numeric(6,3),
  "explanation"         text,
  "constraint_details"  jsonb                    not null default '{}'::jsonb,
  "allocated_at"        timestamp with time zone not null default now(),
  constraint "allocation_scores_valid"
    check
    ((((compatibility_score IS NULL) OR ((compatibility_score >= (0)::numeric) AND (compatibility_score <= (100)::numeric))) AND ((allocation_score IS NULL) OR (allocation_score >=
    (0)::numeric)))),
  constraint "allocations_allocation_run_id_student_id_key" unique (allocation_run_id, student_id),
  constraint "allocations_pkey" primary key (id)
);

alter table "public"."allocations"
  enable row level security;

create table "public"."career_skills" (
  "career_id"   uuid         not null,
  "skill_id"    uuid         not null,
  "importance"  numeric(5,2) not null default 1,
  "is_required" boolean      not null default false,
  constraint "career_skill_importance_valid" check (((importance >= (0)::numeric) AND (importance <= (1)::numeric))),
  constraint "career_skills_pkey" primary key (career_id, skill_id)
);

alter table "public"."career_skills"
  enable row level security;

create table "public"."careers" (
  "id"          uuid                     not null default gen_random_uuid(),
  "title"       text                     not null,
  "description" text,
  "category"    text,
  "created_at"  timestamp with time zone not null default now(),
  constraint "careers_pkey" primary key (id),
  constraint "careers_title_unique" unique (title)
);

alter table "public"."careers"
  enable row level security;

create table "public"."companies" (
  "id"            uuid                     not null default gen_random_uuid(),
  "user_id"       uuid                     not null,
  "name"          text                     not null,
  "description"   text,
  "website"       text,
  "industry"      text,
  "location"      text,
  "contact_email" text,
  "contact_phone" text,
  "is_verified"   boolean                  not null default false,
  "created_at"    timestamp with time zone not null default now(),
  "updated_at"    timestamp with time zone not null default now(),
  constraint "companies_pkey" primary key (id),
  constraint "companies_user_id_key" unique (user_id)
);

alter table "public"."companies"
  enable row level security;

create table "public"."education" (
  "id"               uuid                     not null default gen_random_uuid(),
  "student_id"       uuid                     not null,
  "institution_name" text                     not null,
  "degree"           text,
  "field_of_study"   text,
  "start_year"       integer,
  "end_year"         integer,
  "grade"            text,
  "created_at"       timestamp with time zone not null default now(),
  constraint "education_pkey" primary key (id),
  constraint "education_year_valid" check (((start_year IS NULL) OR (end_year IS NULL) OR (end_year >= start_year)))
);

alter table "public"."education"
  enable row level security;

create table "public"."feedback" (
  "id"                uuid                     not null default gen_random_uuid(),
  "student_id"        uuid                     not null,
  "rating"            integer                  not null,
  "comment"           text,
  "recommendation_id" uuid,
  "created_at"        timestamp with time zone not null default now(),
  constraint "feedback_pkey" primary key (id),
  constraint "feedback_rating_valid" check (((rating >= 1) AND (rating <= 5)))
);

alter table "public"."feedback"
  enable row level security;

create table "public"."internship_matches" (
  "id"                  uuid                     not null default gen_random_uuid(),
  "student_id"          uuid                     not null,
  "internship_id"       uuid                     not null,
  "skill_score"         numeric(6,3),
  "eligibility_score"   numeric(6,3),
  "preference_score"    numeric(6,3),
  "compatibility_score" numeric(6,3),
  "explanation"         text,
  "factor_details"      jsonb                    not null default '{}'::jsonb,
  "created_at"          timestamp with time zone not null default now(),
  constraint "internship_match_scores_valid"
    check
    ((((skill_score IS NULL) OR ((skill_score >= (0)::numeric) AND (skill_score <= (100)::numeric))) AND ((eligibility_score IS NULL) OR ((eligibility_score >= (0)::numeric) AND
    (eligibility_score <= (100)::numeric))) AND ((preference_score IS NULL) OR ((preference_score >= (0)::numeric) AND (preference_score <= (100)::numeric))) AND
    ((compatibility_score IS NULL) OR ((compatibility_score >= (0)::numeric) AND (compatibility_score <= (100)::numeric))))),
  constraint "internship_matches_pkey" primary key (id),
  constraint "internship_matches_student_id_internship_id_key" unique (student_id, internship_id)
);

alter table "public"."internship_matches"
  enable row level security;

create table "public"."internship_skills" (
  "internship_id" uuid         not null,
  "skill_id"      uuid         not null,
  "importance"    numeric(5,2) not null default 1,
  "is_required"   boolean      not null default false,
  constraint "internship_skill_importance_valid" check (((importance >= (0)::numeric) AND (importance <= (1)::numeric))),
  constraint "internship_skills_pkey" primary key (internship_id, skill_id)
);

alter table "public"."internship_skills"
  enable row level security;

create table "public"."internship_verifications" (
  "id"            uuid                     not null default gen_random_uuid(),
  "internship_id" uuid                     not null,
  "admin_id"      uuid,
  "remarks"       text,
  "verified_at"   timestamp with time zone not null default now(),
  constraint "internship_verifications_pkey" primary key (id)
);

alter table "public"."internship_verifications"
  enable row level security;

create table "public"."internships" (
  "id"                   uuid                     not null default gen_random_uuid(),
  "company_id"           uuid                     not null,
  "title"                text                     not null,
  "description"          text,
  "location"             text,
  "is_remote"            boolean                  not null default false,
  "duration"             text,
  "seats"                integer                  not null default 1,
  "eligibility_criteria" jsonb                    not null default '{}'::jsonb,
  "minimum_percentage"   numeric(5,2),
  "application_deadline" timestamp with time zone,
  "start_date"           date,
  "created_at"           timestamp with time zone not null default now(),
  "updated_at"           timestamp with time zone not null default now(),
  constraint "internship_percentage_valid" check (((minimum_percentage IS NULL) OR ((minimum_percentage >= (0)::numeric) AND (minimum_percentage <= (100)::numeric)))),
  constraint "internship_seats_positive" check ((seats > 0)),
  constraint "internships_pkey" primary key (id)
);

alter table "public"."internships"
  enable row level security;

create table "public"."learning_resources" (
  "id"          uuid                     not null default gen_random_uuid(),
  "title"       text                     not null,
  "description" text,
  "url"         text,
  "provider"    text,
  "skill_id"    uuid,
  "career_id"   uuid,
  "difficulty"  text,
  "duration"    text,
  "is_active"   boolean                  not null default true,
  "created_at"  timestamp with time zone not null default now(),
  constraint "learning_resources_pkey" primary key (id)
);

alter table "public"."learning_resources"
  enable row level security;

create table "public"."profiles" (
  "id"         uuid                     not null,
  "full_name"  text,
  "email"      text,
  "phone"      text,
  "avatar_url" text,
  "is_active"  boolean                  not null default true,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "profiles_email_key" unique (email),
  constraint "profiles_pkey" primary key (id)
);

alter table "public"."profiles"
  enable row level security;

create table "public"."recommendations" (
  "id"                   uuid                     not null default gen_random_uuid(),
  "student_id"           uuid                     not null,
  "career_id"            uuid,
  "learning_resource_id" uuid,
  "internship_id"        uuid,
  "score"                numeric(6,3),
  "explanation"          text,
  "metadata"             jsonb                    not null default '{}'::jsonb,
  "created_at"           timestamp with time zone not null default now(),
  constraint "recommendation_score_valid" check (((score IS NULL) OR (score >= (0)::numeric))),
  constraint "recommendations_pkey" primary key (id)
);

alter table "public"."recommendations"
  enable row level security;

create table "public"."resumes" (
  "id"              uuid                     not null default gen_random_uuid(),
  "student_id"      uuid                     not null,
  "file_path"       text                     not null,
  "file_name"       text,
  "extracted_text"  text,
  "analysis_result" jsonb,
  "resume_score"    numeric(5,2),
  "uploaded_at"     timestamp with time zone not null default now(),
  "analyzed_at"     timestamp with time zone,
  constraint "resume_score_valid" check (((resume_score IS NULL) OR ((resume_score >= (0)::numeric) AND (resume_score <= (100)::numeric)))),
  constraint "resumes_pkey" primary key (id)
);

alter table "public"."resumes"
  enable row level security;

create table "public"."skill_gaps" (
  "id"            uuid                     not null default gen_random_uuid(),
  "student_id"    uuid                     not null,
  "skill_id"      uuid                     not null,
  "career_id"     uuid,
  "internship_id" uuid,
  "gap_score"     numeric(5,2),
  "is_resolved"   boolean                  not null default false,
  "created_at"    timestamp with time zone not null default now(),
  "updated_at"    timestamp with time zone not null default now(),
  constraint "skill_gap_score_valid" check (((gap_score IS NULL) OR ((gap_score >= (0)::numeric) AND (gap_score <= (100)::numeric)))),
  constraint "skill_gap_single_target" check ((((career_id IS NOT NULL) AND (internship_id IS NULL)) OR ((career_id IS NULL) AND (internship_id IS NOT NULL)))),
  constraint "skill_gaps_pkey" primary key (id)
);

alter table "public"."skill_gaps"
  enable row level security;

create table "public"."skills" (
  "id"          uuid                     not null default gen_random_uuid(),
  "name"        text                     not null,
  "category"    text,
  "description" text,
  "created_at"  timestamp with time zone not null default now(),
  constraint "skills_name_key" unique (name),
  constraint "skills_pkey" primary key (id)
);

alter table "public"."skills"
  enable row level security;

create table "public"."student_profiles" (
  "student_id"             uuid                     not null,
  "date_of_birth"          date,
  "gender"                 text,
  "interests"              text[],
  "career_goals"           text[],
  "preferred_locations"    text[],
  "preferred_domains"      text[],
  "internship_preferences" jsonb                    not null default '{}'::jsonb,
  "bio"                    text,
  "created_at"             timestamp with time zone not null default now(),
  "updated_at"             timestamp with time zone not null default now(),
  constraint "student_profiles_pkey" primary key (student_id)
);

alter table "public"."student_profiles"
  enable row level security;

create table "public"."student_skills" (
  "student_id"  uuid                     not null,
  "skill_id"    uuid                     not null,
  "proficiency" numeric(5,2),
  "source"      text                     default 'profile'::text,
  "created_at"  timestamp with time zone not null default now(),
  constraint "student_skill_proficiency_valid" check (((proficiency IS NULL) OR ((proficiency >= (0)::numeric) AND (proficiency <= (100)::numeric)))),
  constraint "student_skills_pkey" primary key (student_id, skill_id)
);

alter table "public"."student_skills"
  enable row level security;

create type "public"."ai_message_role" as enum (
  'user',
  'assistant'
);

alter table "public"."ai_messages"
  add column "role" public.ai_message_role not null;

create type "public"."allocation_run_status" as enum (
  'draft',
  'running',
  'completed',
  'reviewed',
  'published',
  'failed'
);

alter table "public"."allocation_runs"
  add column "status" public.allocation_run_status not null default 'draft'::public.allocation_run_status;

create type "public"."allocation_status" as enum (
  'allocated',
  'waitlisted',
  'not_allocated'
);

alter table "public"."allocations"
  add column "status" public.allocation_status not null;

create type "public"."feedback_feature" as enum (
  'career_recommendation',
  'learning_recommendation',
  'internship_matching',
  'compatibility_score',
  'allocation',
  'ai_assistant',
  'resume_analysis',
  'skill_gap',
  'platform'
);

alter table "public"."feedback"
  add column "feature" public.feedback_feature not null;

create type "public"."internship_status" as enum (
  'draft',
  'pending_verification',
  'published',
  'closed',
  'rejected'
);

alter table "public"."internships"
  add column "status" public.internship_status not null default 'draft'::public.internship_status;

create type "public"."recommendation_type" as enum (
  'career',
  'learning',
  'internship'
);

alter table "public"."recommendations"
  add column "recommendation_type" public.recommendation_type not null;

create type "public"."resource_type" as enum (
  'course',
  'youtube',
  'project'
);

alter table "public"."learning_resources"
  add column "resource_type" public.resource_type not null;

create type "public"."user_role" as enum (
  'student',
  'company',
  'admin'
);

alter table "public"."profiles"
  add column "role" public.user_role not null;

create type "public"."verification_status" as enum (
  'pending',
  'approved',
  'rejected'
);

alter table "public"."internship_verifications"
  add column "status" public.verification_status not null;

create or replace function public.handle_new_user()
  returns trigger
  language plpgsql
  security definer
  set search_path to 'public'
  AS $function$
BEGIN
    INSERT INTO public.profiles (
        id,
        role,
        full_name,
        email
    )
    VALUES (
        NEW.id,
        'student'::user_role,
        NEW.raw_user_meta_data ->> 'full_name',
        NEW.email
    );

    RETURN NEW;
END;
$function$;

create or replace function public.is_admin()
  returns boolean
  language sql
  stable
  security definer
  set search_path to 'public'
  AS $function$
    SELECT EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE id = auth.uid()
          AND role = 'admin'
          AND is_active = TRUE
    );
$function$;

create or replace function public.prevent_role_change()
  returns trigger
  language plpgsql
  security definer
  set search_path to 'public'
  AS $function$
BEGIN
    IF NEW.role IS DISTINCT FROM OLD.role
       AND NOT public.is_admin() THEN
        RAISE EXCEPTION 'Only administrators can change user roles';
    END IF;

    RETURN NEW;
END;
$function$;

create or replace function public.update_updated_at()
  returns trigger
  language plpgsql
  AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$;

alter table "public"."ai_messages"
  add constraint "ai_messages_conversation_id_fkey" foreign key (conversation_id) references public.ai_conversations(id) on delete cascade;

alter table "public"."allocations"
  add constraint "allocations_allocation_run_id_fkey" foreign key (allocation_run_id) references public.allocation_runs(id) on delete cascade;

alter table "public"."career_skills"
  add constraint "career_skills_career_id_fkey" foreign key (career_id) references public.careers(id) on delete cascade;

alter table "public"."internships"
  add constraint "internships_company_id_fkey" foreign key (company_id) references public.companies(id) on delete cascade;

alter table "public"."allocations"
  add constraint "allocations_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."internship_matches"
  add constraint "internship_matches_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."internship_skills"
  add constraint "internship_skills_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."internship_verifications"
  add constraint "internship_verifications_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."learning_resources"
  add constraint "learning_resources_career_id_fkey" foreign key (career_id) references public.careers(id) on delete set null;

alter table "public"."profiles"
  add constraint "profiles_id_fkey" foreign key (id) references auth.users(id) on delete cascade;

alter table "public"."allocation_runs"
  add constraint "allocation_runs_executed_by_fkey" foreign key (executed_by) references public.profiles(id) on delete set null;

alter table "public"."companies"
  add constraint "companies_user_id_fkey" foreign key (user_id) references public.profiles(id) on delete cascade;

alter table "public"."internship_verifications"
  add constraint "internship_verifications_admin_id_fkey" foreign key (admin_id) references public.profiles(id) on delete set null;

alter table "public"."recommendations"
  add constraint "recommendation_single_target" check ((((recommendation_type = 'career'::public.recommendation_type) AND (career_id IS
    NOT NULL) AND (learning_resource_id IS NULL) AND (internship_id IS NULL)) OR
    ((recommendation_type = 'learning'::public.recommendation_type) AND (career_id IS NULL) AND (learning_resource_id IS
    NOT NULL) AND (internship_id IS NULL)) OR
    ((recommendation_type = 'internship'::public.recommendation_type) AND (career_id IS NULL) AND (learning_resource_id IS NULL) AND (internship_id IS NOT NULL))));

alter table "public"."recommendations"
  add constraint "recommendations_career_id_fkey" foreign key (career_id) references public.careers(id) on delete cascade;

alter table "public"."recommendations"
  add constraint "recommendations_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."recommendations"
  add constraint "recommendations_learning_resource_id_fkey" foreign key (learning_resource_id) references public.learning_resources(id) on delete cascade;

alter table "public"."feedback"
  add constraint "feedback_recommendation_id_fkey" foreign key (recommendation_id) references public.recommendations(id) on delete set null;

alter table "public"."skill_gaps"
  add constraint "skill_gaps_career_id_fkey" foreign key (career_id) references public.careers(id) on delete cascade;

alter table "public"."skill_gaps"
  add constraint "skill_gaps_internship_id_fkey" foreign key (internship_id) references public.internships(id) on delete cascade;

alter table "public"."career_skills"
  add constraint "career_skills_skill_id_fkey" foreign key (skill_id) references public.skills(id) on delete cascade;

alter table "public"."internship_skills"
  add constraint "internship_skills_skill_id_fkey" foreign key (skill_id) references public.skills(id) on delete cascade;

alter table "public"."learning_resources"
  add constraint "learning_resources_skill_id_fkey" foreign key (skill_id) references public.skills(id) on delete set null;

alter table "public"."skill_gaps"
  add constraint "skill_gaps_skill_id_fkey" foreign key (skill_id) references public.skills(id) on delete cascade;

alter table "public"."ai_conversations"
  add constraint "ai_conversations_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."allocations"
  add constraint "allocations_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."education"
  add constraint "education_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."feedback"
  add constraint "feedback_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."internship_matches"
  add constraint "internship_matches_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."recommendations"
  add constraint "recommendations_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."resumes"
  add constraint "resumes_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."skill_gaps"
  add constraint "skill_gaps_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

alter table "public"."student_profiles"
  add constraint "student_profiles_student_id_fkey" foreign key (student_id) references public.profiles(id) on delete cascade;

alter table "public"."student_skills"
  add constraint "student_skills_skill_id_fkey" foreign key (skill_id) references public.skills(id) on delete cascade;

alter table "public"."student_skills"
  add constraint "student_skills_student_id_fkey" foreign key (student_id) references public.student_profiles(student_id) on delete cascade;

create index idx_ai_conversations_student on public.ai_conversations using btree (student_id);

create index idx_ai_messages_conversation on public.ai_messages using btree (conversation_id);

create index idx_allocation_runs_executed_by on public.allocation_runs using btree (executed_by);

create index idx_allocation_runs_status on public.allocation_runs using btree (status);

create index idx_allocations_internship on public.allocations using btree (internship_id);

create index idx_allocations_run on public.allocations using btree (allocation_run_id);

create index idx_allocations_student on public.allocations using btree (student_id);

create index idx_career_skills_skill on public.career_skills using btree (skill_id);

create index idx_education_student on public.education using btree (student_id);

create index idx_feedback_feature on public.feedback using btree (feature);

create index idx_feedback_recommendation on public.feedback using btree (recommendation_id);

create index idx_feedback_student on public.feedback using btree (student_id);

create index idx_internship_matches_internship on public.internship_matches using btree (internship_id);

create index idx_internship_matches_score on public.internship_matches using btree (compatibility_score);

create index idx_internship_matches_student on public.internship_matches using btree (student_id);

create index idx_internship_skills_skill on public.internship_skills using btree (skill_id);

create index idx_internship_verifications_admin on public.internship_verifications using btree (admin_id);

create index idx_internship_verifications_internship on public.internship_verifications using btree (internship_id);

create index idx_internships_company on public.internships using btree (company_id);

create index idx_internships_start_date on public.internships using btree (start_date);

create index idx_internships_status on public.internships using btree (status);

create index idx_learning_resources_active on public.learning_resources using btree (is_active);

create index idx_learning_resources_career on public.learning_resources using btree (career_id);

create index idx_learning_resources_skill on public.learning_resources using btree (skill_id);

create index idx_learning_resources_type on public.learning_resources using btree (resource_type);

create index idx_profiles_active on public.profiles using btree (is_active);

create index idx_profiles_role on public.profiles using btree (role);

create index idx_recommendations_career on public.recommendations using btree (career_id);

create index idx_recommendations_internship on public.recommendations using btree (internship_id);

create index idx_recommendations_learning_resource on public.recommendations using btree (learning_resource_id);

create index idx_recommendations_student on public.recommendations using btree (student_id);

create index idx_recommendations_type on public.recommendations using btree (recommendation_type);

create index idx_resumes_student on public.resumes using btree (student_id);

create index idx_skill_gaps_career on public.skill_gaps using btree (career_id);

create index idx_skill_gaps_internship on public.skill_gaps using btree (internship_id);

create index idx_skill_gaps_skill on public.skill_gaps using btree (skill_id);

create index idx_skill_gaps_student on public.skill_gaps using btree (student_id);

create index idx_student_skills_skill on public.student_skills using btree (skill_id);

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

create trigger ai_conversations_updated_at
  before update on public.ai_conversations
  for each row
  execute function public.update_updated_at();

create trigger companies_updated_at
  before update on public.companies
  for each row
  execute function public.update_updated_at();

create trigger internships_updated_at
  before update on public.internships
  for each row
  execute function public.update_updated_at();

create trigger prevent_profile_role_change
  before update on public.profiles
  for each row
  execute function public.prevent_role_change();

create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.update_updated_at();

create trigger skill_gaps_updated_at
  before update on public.skill_gaps
  for each row
  execute function public.update_updated_at();

create trigger student_profiles_updated_at
  before update on public.student_profiles
  for each row
  execute function public.update_updated_at();

create policy "Students can create own AI conversations" on "public"."ai_conversations"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can delete own AI conversations" on "public"."ai_conversations"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can update own AI conversations" on "public"."ai_conversations"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own AI conversations" on "public"."ai_conversations"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can create own AI messages" on "public"."ai_messages"
  for insert
  to "authenticated"
  with check ((conversation_id IN ( SELECT ai_conversations.id
   FROM public.ai_conversations
  WHERE (ai_conversations.student_id = auth.uid()))));

create policy "Students can delete own AI messages" on "public"."ai_messages"
  for delete
  to "authenticated"
  using ((conversation_id in ( select ai_conversations.id
   from public.ai_conversations
  where (ai_conversations.student_id = auth.uid()))));

create policy "Students can update own AI messages" on "public"."ai_messages"
  for update
  to "authenticated"
  using ((conversation_id in ( select ai_conversations.id
   from public.ai_conversations
  where (ai_conversations.student_id = auth.uid()))))
  with check ((conversation_id IN ( SELECT ai_conversations.id
   FROM public.ai_conversations
  WHERE (ai_conversations.student_id = auth.uid()))));

create policy "Students can view own AI messages" on "public"."ai_messages"
  for select
  to "authenticated"
  using ((conversation_id in ( select ai_conversations.id
   from public.ai_conversations
  where (ai_conversations.student_id = auth.uid()))));

create policy "Admins can create allocation runs" on "public"."allocation_runs"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete allocation runs" on "public"."allocation_runs"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update allocation runs" on "public"."allocation_runs"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view allocation runs" on "public"."allocation_runs"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Admins can create allocations" on "public"."allocations"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete allocations" on "public"."allocations"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update allocations" on "public"."allocations"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all allocations" on "public"."allocations"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can view own allocations" on "public"."allocations"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Admins can create career skills" on "public"."career_skills"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete career skills" on "public"."career_skills"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update career skills" on "public"."career_skills"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all career skills" on "public"."career_skills"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Authenticated users can view career skills" on "public"."career_skills"
  for select
  to "authenticated"
  using (true);

create policy "Admins can create careers" on "public"."careers"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete careers" on "public"."careers"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update careers" on "public"."careers"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all careers" on "public"."careers"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Authenticated users can view careers" on "public"."careers"
  for select
  to "authenticated"
  using (true);

create policy "Companies can create own company profile" on "public"."companies"
  for insert
  to "authenticated"
  with check (((user_id = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'company'::public.user_role) AND (profiles.is_active = true))))));

create policy "Companies can delete own company profile" on "public"."companies"
  for delete
  to "authenticated"
  using (((user_id = auth.uid()) AND (exists ( select 1
   from public.profiles
  where ((profiles.id = auth.uid()) AND (profiles.role = 'company'::public.user_role) AND (profiles.is_active = true))))));

create policy "Companies can update own company profile" on "public"."companies"
  for update
  to "authenticated"
  using (((user_id = auth.uid()) AND (exists ( select 1
   from public.profiles
  where ((profiles.id = auth.uid()) AND (profiles.role = 'company'::public.user_role) AND (profiles.is_active = true))))))
  with check (((user_id = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'company'::public.user_role) AND (profiles.is_active = true))))));

create policy "Companies can view own company profile" on "public"."companies"
  for select
  to "authenticated"
  using ((user_id = auth.uid()));

create policy "Admins can create education" on "public"."education"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete education" on "public"."education"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update education" on "public"."education"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all education" on "public"."education"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can delete own education" on "public"."education"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can insert own education" on "public"."education"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can update own education" on "public"."education"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own education" on "public"."education"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Admins can view all feedback" on "public"."feedback"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can delete own feedback" on "public"."feedback"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can submit own feedback" on "public"."feedback"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can update own feedback" on "public"."feedback"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own feedback" on "public"."feedback"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can view own internship matches" on "public"."internship_matches"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Authenticated users can view internship skills" on "public"."internship_skills"
  for select
  to "authenticated"
  using (true);

create policy "Companies can add skills to own internships" on "public"."internship_skills"
  for insert
  to "authenticated"
  with check (((internship_id IN ( SELECT i.id
   FROM (public.internships i
     JOIN public.companies c ON ((c.id = i.company_id)))
  WHERE (c.user_id = auth.uid()))) AND (EXISTS ( SELECT 1
   FROM public.profiles p
  WHERE ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Companies can delete skills from own internships" on "public"."internship_skills"
  for delete
  to "authenticated"
  using (((internship_id in ( select i.id
   from (public.internships i
     JOIN public.companies c on ((c.id = i.company_id)))
  where (c.user_id = auth.uid()))) AND (exists ( select 1
   from public.profiles p
  where ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Companies can update skills for own internships" on "public"."internship_skills"
  for update
  to "authenticated"
  using (((internship_id in ( select i.id
   from (public.internships i
     JOIN public.companies c on ((c.id = i.company_id)))
  where (c.user_id = auth.uid()))) AND (exists ( select 1
   from public.profiles p
  where ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))))
  with check (((internship_id IN ( SELECT i.id
   FROM (public.internships i
     JOIN public.companies c ON ((c.id = i.company_id)))
  WHERE (c.user_id = auth.uid()))) AND (EXISTS ( SELECT 1
   FROM public.profiles p
  WHERE ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Admins can create internship verifications" on "public"."internship_verifications"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete internship verifications" on "public"."internship_verifications"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update internship verifications" on "public"."internship_verifications"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view internship verifications" on "public"."internship_verifications"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Authenticated users can view published internships" on "public"."internships"
  for select
  to "authenticated"
  using (((status = 'published'::public.internship_status) or (company_id in ( select companies.id
   from public.companies
  where (companies.user_id = auth.uid())))));

create policy "Companies can create own internships" on "public"."internships"
  for insert
  to "authenticated"
  with check (((company_id IN ( SELECT c.id
   FROM public.companies c
  WHERE (c.user_id = auth.uid()))) AND (EXISTS ( SELECT 1
   FROM public.profiles p
  WHERE ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Companies can delete own internships" on "public"."internships"
  for delete
  to "authenticated"
  using (((company_id in ( select c.id
   from public.companies c
  where (c.user_id = auth.uid()))) AND (exists ( select 1
   from public.profiles p
  where ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Companies can update own internships" on "public"."internships"
  for update
  to "authenticated"
  using (((company_id in ( select c.id
   from public.companies c
  where (c.user_id = auth.uid()))) AND (exists ( select 1
   from public.profiles p
  where ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))))
  with check (((company_id IN ( SELECT c.id
   FROM public.companies c
  WHERE (c.user_id = auth.uid()))) AND (EXISTS ( SELECT 1
   FROM public.profiles p
  WHERE ((p.id = auth.uid()) AND (p.role = 'company'::public.user_role) AND (p.is_active = true))))));

create policy "Admins can create learning resources" on "public"."learning_resources"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete learning resources" on "public"."learning_resources"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update learning resources" on "public"."learning_resources"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all learning resources" on "public"."learning_resources"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Authenticated users can view active learning resources" on "public"."learning_resources"
  for select
  to "authenticated"
  using ((is_active = true));

create policy "Admins can update all profiles" on "public"."profiles"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all profiles" on "public"."profiles"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Users can update own profile" on "public"."profiles"
  for update
  to "authenticated"
  using ((id = auth.uid()))
  with check ((id = auth.uid()));

create policy "Users can view own profile" on "public"."profiles"
  for select
  to "authenticated"
  using ((id = auth.uid()));

create policy "Students can view own recommendations" on "public"."recommendations"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Admins can view all resumes" on "public"."resumes"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can delete own resumes" on "public"."resumes"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can insert own resumes" on "public"."resumes"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can update own resumes" on "public"."resumes"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own resumes" on "public"."resumes"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can view own skill gaps" on "public"."skill_gaps"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Admins can create skills" on "public"."skills"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete skills" on "public"."skills"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update skills" on "public"."skills"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all skills" on "public"."skills"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Authenticated users can view skills" on "public"."skills"
  for select
  to "authenticated"
  using (true);

create policy "Admins can create student profiles" on "public"."student_profiles"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete student profiles" on "public"."student_profiles"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update student profiles" on "public"."student_profiles"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all student profiles" on "public"."student_profiles"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can delete own student profile" on "public"."student_profiles"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can insert own student profile" on "public"."student_profiles"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can update own student profile" on "public"."student_profiles"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own student profile" on "public"."student_profiles"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Admins can create student skills" on "public"."student_skills"
  for insert
  to "authenticated"
  with check (public.is_admin());

create policy "Admins can delete student skills" on "public"."student_skills"
  for delete
  to "authenticated"
  using (public.is_admin());

create policy "Admins can update student skills" on "public"."student_skills"
  for update
  to "authenticated"
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can view all student skills" on "public"."student_skills"
  for select
  to "authenticated"
  using (public.is_admin());

create policy "Students can add own skills" on "public"."student_skills"
  for insert
  to "authenticated"
  with check ((student_id = auth.uid()));

create policy "Students can delete own skills" on "public"."student_skills"
  for delete
  to "authenticated"
  using ((student_id = auth.uid()));

create policy "Students can update own skills" on "public"."student_skills"
  for update
  to "authenticated"
  using ((student_id = auth.uid()))
  with check ((student_id = auth.uid()));

create policy "Students can view own skills" on "public"."student_skills"
  for select
  to "authenticated"
  using ((student_id = auth.uid()));

grant execute on function "public"."handle_new_user"() to public, "anon", "authenticated", "postgres", "service_role";

grant execute on function "public"."is_admin"() to public, "anon", "authenticated", "postgres", "service_role";

grant execute on function "public"."prevent_role_change"() to public, "anon", "authenticated", "postgres", "service_role";

grant execute on function "public"."update_updated_at"() to public, "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."ai_conversations" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."ai_messages" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."allocation_runs" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."allocations" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."career_skills" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."careers" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."companies" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."education" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."feedback" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."internship_matches" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."internship_skills" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."internship_verifications" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."internships" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."learning_resources" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."profiles" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."recommendations" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."resumes" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."skill_gaps" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."skills" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."student_profiles" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."student_skills" to "anon", "authenticated", "postgres", "service_role";

grant usage on type "public"."ai_message_role" to "postgres";

grant usage on type "public"."allocation_run_status" to "postgres";

grant usage on type "public"."allocation_status" to "postgres";

grant usage on type "public"."feedback_feature" to "postgres";

grant usage on type "public"."internship_status" to "postgres";

grant usage on type "public"."recommendation_type" to "postgres";

grant usage on type "public"."resource_type" to "postgres";

grant usage on type "public"."user_role" to "postgres";

grant usage on type "public"."verification_status" to "postgres";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "anon";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "authenticated";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "service_role";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "anon";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "authenticated";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "service_role";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "anon";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "authenticated";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "service_role";

