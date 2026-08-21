import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import yuvasarthiLogo from '../../assets/yuvasarthi-logo.png';

export const AuthPage: React.FC = () => {
  const {
    authView,
    setAuthView,
  } = useApp();

  const renderContent = () => {
    switch (authView) {
      case 'role-selection':
        return (
          <RoleSelection
            onBack={() => setAuthView('welcome')}
            onStudent={() =>
              setAuthView('student-login')
            }
            onEmployer={() =>
              setAuthView('employer-login')
            }
          />
        );

      case 'student-login':
        return (
          <LoginPlaceholder
            role="Student"
            onBack={() =>
              setAuthView('role-selection')
            }
          />
        );

      case 'employer-login':
        return (
          <LoginPlaceholder
            role="Employer"
            onBack={() =>
              setAuthView('role-selection')
            }
          />
        );

      default:
        return (
          <Welcome
            onGetStarted={() =>
              setAuthView('role-selection')
            }
          />
        );
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {renderContent()}
    </main>
  );
};

/* ==========================================
   WELCOME
========================================== */

interface WelcomeProps {
  onGetStarted: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({
  onGetStarted,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <img
  src={yuvasarthiLogo}
  alt="YuvaSarthi"
  className="w-44 h-auto object-contain"
/>

          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-600 mb-4">
            AI-Powered Career Guidance
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.05]">
            Your journey.
            <br />
            Your opportunity.
            <br />
            <span className="text-cyan-600">
              Your future.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Discover the right career path, build
            meaningful skills, and find internship
            opportunities aligned with your goals.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={onGetStarted}
              className="px-7 py-3.5 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition"
            >
              Get Started
              <span className="ml-2">→</span>
            </button>

            <button
              onClick={onGetStarted}
              className="px-7 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Sign In
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
            <span>AI Career Guidance</span>
            <span>•</span>
            <span>Smart Matching</span>
            <span>•</span>
            <span>Internships</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <div className="relative h-[560px] rounded-[2rem] bg-slate-50 border border-slate-100 overflow-hidden">

            <div className="absolute w-72 h-72 rounded-full bg-cyan-100 blur-3xl -top-20 -right-20" />

            <div className="absolute w-72 h-72 rounded-full bg-slate-200 blur-3xl -bottom-20 -left-20" />

            <div className="relative h-full flex items-center justify-center p-10">
              <div className="w-full max-w-sm">

                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6">
                  <div className="flex items-center justify-between mb-7">
                    <div>
                      <p className="text-sm text-slate-400">
                        Career Progress
                      </p>

                      <h3 className="text-xl font-bold text-slate-900">
                        Keep moving forward
                      </h3>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                      ↗
                    </div>
                  </div>

                  <div className="space-y-5">

                    <ProgressItem
                      title="Profile"
                      value="92%"
                    />

                    <ProgressItem
                      title="Skills"
                      value="78%"
                    />

                    <ProgressItem
                      title="Career Readiness"
                      value="84%"
                    />

                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <StatCard
                    value="120+"
                    label="Opportunities"
                  />

                  <StatCard
                    value="92%"
                    label="Smart Matching"
                  />

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ==========================================
   ROLE SELECTION
========================================== */

interface RoleSelectionProps {
  onBack: () => void;
  onStudent: () => void;
  onEmployer: () => void;
}

const RoleSelection: React.FC<
  RoleSelectionProps
> = ({
  onBack,
  onStudent,
  onEmployer,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-slate-50">

      <div className="w-full max-w-4xl">

        <button
          onClick={onBack}
          className="text-sm text-slate-500 hover:text-slate-900 mb-10"
        >
          ← Back
        </button>

        <div className="text-center mb-12">

          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
              YS
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Welcome to YuvaSarthi
          </p>

          <h1 className="text-4xl font-bold text-slate-950">
            How would you like to continue?
          </h1>

          <p className="mt-4 text-slate-500">
            Choose the experience that best describes you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <RoleCard
            title="I'm a Student"
            description="Discover internships, identify your career path, improve your skills and connect with the right opportunities."
            icon="🎓"
            onClick={onStudent}
          />

          <RoleCard
            title="I'm an Employer"
            description="Post internships, discover talented students and find candidates aligned with your organization's needs."
            icon="🏢"
            onClick={onEmployer}
          />

        </div>

      </div>
    </div>
  );
};

/* ==========================================
   ROLE CARD
========================================== */

interface RoleCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white border border-slate-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
    >

      <div className="flex items-start justify-between">

        <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-cyan-50 flex items-center justify-center text-2xl transition">
          {icon}
        </div>

        <span className="text-2xl text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-1 transition">
          →
        </span>

      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-950">
        {title}
      </h2>

      <p className="mt-3 text-slate-500 leading-7">
        {description}
      </p>

      <div className="mt-7 text-sm font-semibold text-cyan-600">
        Continue →
      </div>

    </button>
  );
};

/* ==========================================
   LOGIN PLACEHOLDER
========================================== */

interface LoginPlaceholderProps {
  role: 'Student' | 'Employer';
  onBack: () => void;
}

const LoginPlaceholder: React.FC<LoginPlaceholderProps> = ({
  role,
  onBack,
}) => {
  const {
    login,
    setAuthView,
  } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState('');

  const isEmployer = role === 'Employer';

  const handleLogin = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError('');

    if (!email.trim()) {
      setError(
        isEmployer
          ? 'Please enter your company email address.'
          : 'Please enter your email address.'
      );

      return;
    }

    if (!password.trim()) {
      setError(
        'Please enter your password.'
      );

      return;
    }

    if (!email.includes('@')) {
      setError(
        'Please enter a valid email address.'
      );

      return;
    }

    /*
     * Frontend authentication for the UI prototype.
     *
     * The actual backend authentication will
     * be connected later.
     */
    login(
      isEmployer
        ? 'employer'
        : 'student'
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* =====================================
          LEFT BRAND PANEL
      ====================================== */}

      <div className="hidden lg:flex lg:w-[48%] bg-slate-950 text-white p-12 relative overflow-hidden">

        {/* Decorative elements */}

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between w-full">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold">
              YS
            </div>

            <span className="text-xl font-semibold">
              YuvaSarthi
            </span>

          </div>

          {/* Main message */}

          <div className="max-w-lg">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-cyan-300 text-xs font-medium mb-6">

              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

              {isEmployer
                ? 'EMPLOYER PORTAL'
                : 'STUDENT PORTAL'}

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">

              {isEmployer ? (
                <>
                  Find the right
                  <br />
                  <span className="text-cyan-400">
                    talent.
                  </span>
                </>
              ) : (
                <>
                  Build the right
                  <br />
                  <span className="text-cyan-400">
                    career.
                  </span>
                </>
              )}

            </h1>

            <p className="mt-6 text-slate-400 text-lg leading-8 max-w-md">

              {isEmployer
                ? 'Connect with skilled students, manage internship opportunities and discover candidates matched to your requirements.'
                : 'Discover career opportunities, improve your skills and find internships that match your potential.'}

            </p>

          </div>

          {/* Bottom */}

          <div className="text-sm text-slate-500">
            AI-powered career & internship ecosystem
          </div>

        </div>
      </div>


      {/* =====================================
          RIGHT LOGIN PANEL
      ====================================== */}

      <div className="flex-1 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Back */}

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition mb-8"
          >
            <span>←</span>

            Back to role selection
          </button>


          {/* Header */}

          <div className="mb-8">

            <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold mb-6">
              YS
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
              {isEmployer
                ? 'Employer Portal'
                : 'Student Portal'}
            </p>

            <h1 className="text-3xl font-bold text-slate-950">
              Welcome back
            </h1>

            <p className="mt-2 text-slate-500">
              Sign in to continue to your{' '}
              {role.toLowerCase()} account.
            </p>

          </div>


          {/* Login Card */}

          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-slate-700 mb-2">

                  {isEmployer
                    ? 'Company email'
                    : 'Email address'}

                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder={
                    isEmployer
                      ? 'hr@company.com'
                      : 'you@example.com'
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50"
                />

                {isEmployer && (
                  <p className="mt-2 text-xs text-slate-400">
                    Use your official organization email.
                  </p>
                )}

              </div>


              {/* Password */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setAuthView(
                        'forgot-password'
                      )
                    }
                    className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    placeholder="Enter your password"
                    className="w-full px-4 py-3.5 pr-12 rounded-xl border border-slate-200 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    {showPassword
                      ? '◉'
                      : '○'}
                  </button>

                </div>

              </div>


              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}


              {/* Sign In */}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 active:scale-[0.99] transition"
              >
                Sign In
              </button>

            </form>


            {/* Divider */}

            <div className="relative my-7">

              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>

              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-xs text-slate-400">
                  OR
                </span>
              </div>

            </div>


            {/* Google */}

            <button
              type="button"
              className="w-full py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-3"
            >

              <span className="font-bold">
                G
              </span>

              Continue with Google

            </button>


            {/* Registration */}

            <div className="mt-7 pt-6 border-t border-slate-100 text-center">

              <p className="text-sm text-slate-500">

                {isEmployer
                  ? "Don't have an employer account?"
                  : "Don't have a student account?"}

              </p>

              <button
                type="button"
                onClick={() =>
                  setAuthView(
                    isEmployer
                      ? 'employer-register'
                      : 'student-register'
                  )
                }
                className="mt-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              >
                {isEmployer
                  ? 'Register your company →'
                  : 'Create your account →'}
              </button>

            </div>

          </div>


          {/* Security note */}

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">

            <span>🔒</span>

            Secure sign-in experience

          </div>

        </div>

      </div>

    </div>
  );
};

/* ==========================================
   SMALL COMPONENTS
========================================== */

interface ProgressItemProps {
  title: string;
  value: string;
}

const ProgressItem: React.FC<
  ProgressItemProps
> = ({
  title,
  value,
}) => {
  return (
    <div>

      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">
          {title}
        </span>

        <span className="text-sm font-bold text-slate-900">
          {value}
        </span>
      </div>

      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-500 rounded-full"
          style={{
            width: value,
          }}
        />
      </div>

    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<
  StatCardProps
> = ({
  value,
  label,
}) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
      <p className="text-2xl font-bold text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
};